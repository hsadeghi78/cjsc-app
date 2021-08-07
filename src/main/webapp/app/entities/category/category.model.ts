import { IProduct } from 'app/entities/product/product.model';

export interface ICategory {
  id?: number;
  title?: string;
  typeCode?: string;
  description?: string | null;
  products?: IProduct[] | null;
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public title?: string,
    public typeCode?: string,
    public description?: string | null,
    public products?: IProduct[] | null
  ) {}
}

export function getCategoryIdentifier(category: ICategory): number | undefined {
  return category.id;
}
