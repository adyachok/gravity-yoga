import * as _ from 'lodash';

import {DiscountOptionModel} from './discount-option.model';
import {DecisionType} from './decision-type.enum';

export class DiscountModel {
  private options: DiscountOptionModel[] = [];
  private type: DecisionType;

  constructor(type: DecisionType) {
    this.type = type;
  }

  setOption(option: DiscountOptionModel) {
    this.options = _.concat(this.options, option);
  }

  getOptions(): DiscountOptionModel[] {
    return _.cloneDeep(this.options);
  }

  getType(): DecisionType {
    return _.cloneDeep(this.type);
  }
}
