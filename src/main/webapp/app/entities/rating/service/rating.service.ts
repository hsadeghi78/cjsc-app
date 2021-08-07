import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IRating, getRatingIdentifier } from '../rating.model';

export type EntityResponseType = HttpResponse<IRating>;
export type EntityArrayResponseType = HttpResponse<IRating[]>;

@Injectable({ providedIn: 'root' })
export class RatingService {
  public resourceUrl = this.applicationConfigService.getEndpointFor('api/ratings');

  constructor(protected http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(rating: IRating): Observable<EntityResponseType> {
    return this.http.post<IRating>(this.resourceUrl, rating, { observe: 'response' });
  }

  update(rating: IRating): Observable<EntityResponseType> {
    return this.http.put<IRating>(`${this.resourceUrl}/${getRatingIdentifier(rating) as number}`, rating, { observe: 'response' });
  }

  partialUpdate(rating: IRating): Observable<EntityResponseType> {
    return this.http.patch<IRating>(`${this.resourceUrl}/${getRatingIdentifier(rating) as number}`, rating, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRating>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRating[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addRatingToCollectionIfMissing(ratingCollection: IRating[], ...ratingsToCheck: (IRating | null | undefined)[]): IRating[] {
    const ratings: IRating[] = ratingsToCheck.filter(isPresent);
    if (ratings.length > 0) {
      const ratingCollectionIdentifiers = ratingCollection.map(ratingItem => getRatingIdentifier(ratingItem)!);
      const ratingsToAdd = ratings.filter(ratingItem => {
        const ratingIdentifier = getRatingIdentifier(ratingItem);
        if (ratingIdentifier == null || ratingCollectionIdentifiers.includes(ratingIdentifier)) {
          return false;
        }
        ratingCollectionIdentifiers.push(ratingIdentifier);
        return true;
      });
      return [...ratingsToAdd, ...ratingCollection];
    }
    return ratingCollection;
  }
}
