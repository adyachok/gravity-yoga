import {DiscountModel} from './discount.model';
import {DecisionType} from './decision-type.enum';

export class DurationDiscountModel extends DiscountModel {
  // value - month
  constructor() {
    super(DecisionType.FREQUENCY);
  }
}
