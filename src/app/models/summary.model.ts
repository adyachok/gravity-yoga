import {DiscountOptionModel} from './discount-option.model';

export class SummaryModel {
  totalDiscountPersents: number;
  totalDiscountCurrency: number;
  totalDiscountForAllTrainings: number;
  totalPriceForAllTrainings: number;

  constructor(price: number, duration: DiscountOptionModel, frequency: DiscountOptionModel, extraDiscount = 0) {
    this.totalDiscountPersents = duration.rate + frequency.rate + extraDiscount;
    this.totalDiscountCurrency = Math.round(price * this.totalDiscountPersents / 100);
    // 4 weeks in a month
    this.totalDiscountForAllTrainings = this.totalDiscountCurrency * duration.value * frequency.value;
    this.totalPriceForAllTrainings = price * duration.value * frequency.value;
  }
}
