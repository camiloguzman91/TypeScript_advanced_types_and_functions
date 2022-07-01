import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = 'hello';
  //data.createdAt = new Date(1994, 5, 5);
  products.push(data);
}

export const updateProduct = (id: string, changes: Product) => {
  //code
}
