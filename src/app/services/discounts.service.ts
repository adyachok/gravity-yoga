import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {DiscountModel} from '../models/discount.model';

import {FrequencyDiscountModel} from '../models/frequency-discount.model';
import {DurationDiscountModel} from '../models/duration-discount.model';

@Injectable()
export class DiscountsService {
  private frequencyDiscount: FrequencyDiscountModel;
  private durationDiscount: DurationDiscountModel;

  constructor() {
    this.frequencyDiscount = new FrequencyDiscountModel();
    this.frequencyDiscount.setOption({
      'value': 4,
      'rate': 0,
      'description': 'один раз в неделю'
    });
    this.frequencyDiscount.setOption({
      'value': 8,
      'rate': 7,
      'description': 'дважды в неделю'
    });
    this.frequencyDiscount.setOption({
      'value': 12,
      'rate': 15,
      'description': 'трижды в неделю'
    });
    this.durationDiscount = new DurationDiscountModel();
    this.durationDiscount.setOption({
      'value': 1,
      'rate': 0,
      'description': 'Минимальная (1 мес.)'
    });
    this.durationDiscount.setOption({
      'value': 3,
      'rate': 7,
      'description': 'Прогрессивная (3 мес.)'
    });
    this.durationDiscount.setOption({
      'value': 6,
      'rate': 15,
      'description': 'Эффективная (6 мес.)'
    });
    this.durationDiscount.setOption({
      'value': 12,
      'rate': 21,
      'description': 'Результативная (12 мес.)'
    });
  }

  getFrequencyDiscount(): DiscountModel {
    return _.cloneDeep(this.frequencyDiscount);
  }

  getDurationDiscount(): DiscountModel {
    return _.cloneDeep(this.durationDiscount);
  }
}
