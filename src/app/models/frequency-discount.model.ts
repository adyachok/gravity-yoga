import {DecisionType} from './decision-type.enum';
import {DiscountModel} from './discount.model';

export class FrequencyDiscountModel extends DiscountModel {
  constructor() {
    super(DecisionType.DURATION);
  }
}
