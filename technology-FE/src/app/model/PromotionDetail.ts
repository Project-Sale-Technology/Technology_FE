import {Promotion} from "./Promotion";

export class PromotionDetail {
  id: number;
  startDate?: string;
  endDate?: string;
  title: string;
  status?: boolean;
  promotion: Promotion;
}
