export interface RootObject {
  success: boolean;
  products: Product[];
}

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}
