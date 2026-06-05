export interface ProductColor {
  id: number;
  color_name: string;
  color_code: string;
}

export interface ProductMemory {
  id: number;
  memory_value: number;
}

export interface Product {
  id: number;

  title: string;

  price: number;

  discount: number;

  category: string;

  display?: string;

  cpu?: string;

  system_name?: string;

  features?: string;

  images: string[];

  colors: ProductColor[];

  memory: ProductMemory[];
}