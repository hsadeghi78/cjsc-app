import { IProduct } from 'app/entities/product/product.model';

export interface IRating {
  id?: number;
  rating?: number | null;
  description?: string | null;
  product?: IProduct;
}

export class Rating implements IRating {
  constructor(public id?: number, public rating?: number | null, public description?: string | null, public product?: IProduct) {}
}

export function getRatingIdentifier(rating: IRating): number | undefined {
  return rating.id;
}
