export type Product = {
  id: number;
  title: string;
  description: string;
  typeSize: Size;
  size: string;
  imageUrl: string;
  maker: string;
  brand: string;
  price: number;
  barcode: number;
};

export enum Size {
  VOLUME = 'volume',
  WEIGHT = 'weight'
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchProductParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface ProductSliceState {
  items: Product[];
  status: Status;
}
