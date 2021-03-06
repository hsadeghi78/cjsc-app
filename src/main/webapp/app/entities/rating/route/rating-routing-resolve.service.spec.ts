jest.mock('@angular/router');

import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';

import { IRating, Rating } from '../rating.model';
import { RatingService } from '../service/rating.service';

import { RatingRoutingResolveService } from './rating-routing-resolve.service';

describe('Service Tests', () => {
  describe('Rating routing resolve service', () => {
    let mockRouter: Router;
    let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
    let routingResolveService: RatingRoutingResolveService;
    let service: RatingService;
    let resultRating: IRating | undefined;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [Router, ActivatedRouteSnapshot],
      });
      mockRouter = TestBed.inject(Router);
      mockActivatedRouteSnapshot = TestBed.inject(ActivatedRouteSnapshot);
      routingResolveService = TestBed.inject(RatingRoutingResolveService);
      service = TestBed.inject(RatingService);
      resultRating = undefined;
    });

    describe('resolve', () => {
      it('should return IRating returned by find', () => {
        // GIVEN
        service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
        mockActivatedRouteSnapshot.params = { id: 123 };

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultRating = result;
        });

        // THEN
        expect(service.find).toBeCalledWith(123);
        expect(resultRating).toEqual({ id: 123 });
      });

      it('should return new IRating if id is not provided', () => {
        // GIVEN
        service.find = jest.fn();
        mockActivatedRouteSnapshot.params = {};

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultRating = result;
        });

        // THEN
        expect(service.find).not.toBeCalled();
        expect(resultRating).toEqual(new Rating());
      });

      it('should route to 404 page if data not found in server', () => {
        // GIVEN
        spyOn(service, 'find').and.returnValue(of(new HttpResponse({ body: null })));
        mockActivatedRouteSnapshot.params = { id: 123 };

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultRating = result;
        });

        // THEN
        expect(service.find).toBeCalledWith(123);
        expect(resultRating).toEqual(undefined);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
      });
    });
  });
});
