import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { ProductComponent } from './list/product.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductUpdateComponent } from './update/product-update.component';
import { ProductDeleteDialogComponent } from './delete/product-delete-dialog.component';
import { ProductRoutingModule } from './route/product-routing.module';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';

@NgModule({
  imports: [SharedModule, ProductRoutingModule],
  declarations: [ProductComponent, ProductDetailComponent, ProductUpdateComponent, ProductDeleteDialogComponent, RatingDialogComponent],
  entryComponents: [ProductDeleteDialogComponent, RatingDialogComponent],
})
export class ProductModule {}
