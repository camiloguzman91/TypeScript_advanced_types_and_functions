type Sizes = "S" | "M" | "L" | "XL";
type userId = string | number;
//type=> tipos primitivos o directos
//interface=> necesita todo un cuerpo, se puede extender

//type Product = {
//  id: string | number,
//  title: string;
//  createdAt: Date;
//  stock: number;
//  size?: Sizes;
//}

interface Product {
  id: string | number,
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProdcut = (data: Product) => {
  products.push(data);
}

