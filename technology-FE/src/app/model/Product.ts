import {Promotion} from "./Promotion";
import {Category} from "./Category";

export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  status?: boolean;
  image: string;
  promotion: Promotion;
  category: Category;
}
