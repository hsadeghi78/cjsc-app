import { Component, OnInit } from '@angular/core';
import { IProduct } from 'app/entities/product/product.model';
import { FormBuilder, Validators } from '@angular/forms';
import { RatingService } from 'app/entities/rating/service/rating.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IRating, Rating } from 'app/entities/rating/rating.model';
import { finalize } from 'rxjs/operators';
import { NgbActiveModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss'],
  providers: [NgbRatingConfig],
})
export class RatingDialogComponent implements OnInit {
  isSaving = false;
  currentRate!: number;
  product?: IProduct;

  editForm = this.fb.group({
    id: [],
    rating: [null, [Validators.min(1), Validators.max(5)]],
    description: [null, [Validators.maxLength(2000)]],
    product: [null, Validators.required],
  });

  constructor(
    protected ratingService: RatingService,
    protected fb: FormBuilder,
    public activeModal: NgbActiveModal,
    protected config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit(): void {
    this.ratingService.query({ 'product.id.equals': this.product?.id }).subscribe(res => {
      if (res.body) {
        // this.updateForm(res.body[0]);
      }
    });
  }

  previousState(): void {
    this.activeModal.dismiss();
  }

  save(): void {
    this.isSaving = true;
    const rating = this.createFromForm();
    rating.product = this.product;
    debugger;
    if (rating.id) {
      this.subscribeToSaveResponse(this.ratingService.update(rating));
    } else {
      this.subscribeToSaveResponse(this.ratingService.create(rating));
    }
  }

  trackProductById(index: number, item: IProduct): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRating>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(rating: IRating): void {
    this.editForm.patchValue({
      id: rating.id,
      rating: rating.rating,
      description: rating.description,
      product: rating.product,
    });
  }

  protected createFromForm(): IRating {
    return {
      ...new Rating(),
      id: this.editForm.get(['id'])!.value,
      rating: this.editForm.get(['rating'])!.value,
      description: this.editForm.get(['description'])!.value,
      product: this.editForm.get(['product'])!.value,
    };
  }
}
