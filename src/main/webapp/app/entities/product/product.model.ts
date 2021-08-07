import { IRating } from 'app/entities/rating/rating.model';
import { ICategory } from 'app/entities/category/category.model';

export interface IProduct {
  id?: number;
  name?: string;
  productCode?: string;
  lastPrice?: number;
  photoContentType?: string | null;
  photo?: string | null;
  description?: string | null;
  ratings?: IRating[] | null;
  category?: ICategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public productCode?: string,
    public lastPrice?: number,
    public photoContentType?: string | null,
    public photo?: string | null,
    public description?: string | null,
    public ratings?: IRating[] | null,
    public category?: ICategory
  ) {}
}

export function getProductIdentifier(product: IProduct): number | undefined {
  return product.id;
}
