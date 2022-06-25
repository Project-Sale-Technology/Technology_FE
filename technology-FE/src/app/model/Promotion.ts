import {Product} from "./Product";
import {PromotionDetail} from "./PromotionDetail";

export class Promotion {
id: number;
percent: number;
quantity: number;
product: Product;
promotionDetail: PromotionDetail;
}
