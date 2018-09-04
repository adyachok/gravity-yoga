import {TrainingModel} from './training.model';
import {DiscountOptionModel} from './discount-option.model';
import {SummaryModel} from './summary.model';

export class TrainingSelectionReportModel {
  training: TrainingModel;
  durationSelected: DiscountOptionModel;
  frequencySelected: DiscountOptionModel;
  isSelected: boolean;
  summary: SummaryModel;

  constructor(training: TrainingModel, durationSelected: DiscountOptionModel,
              frequencySelected: DiscountOptionModel, isSelected: boolean) {
    this.training = training;
    this.durationSelected = durationSelected;
    this.frequencySelected = frequencySelected;
    this.isSelected = isSelected;
    this.updateSummary(0);
  }

  updateSummary(discount: number) {
    this.summary = new SummaryModel(this.training.price, this.durationSelected, this.frequencySelected, discount);
  }

  eq(other: TrainingSelectionReportModel) {
    return this.training.price === other.training.price;
  }

  gt(other: TrainingSelectionReportModel) {
    return this.training.price > other.training.price;
  }

  lt(other: TrainingSelectionReportModel) {
    return !this.gt(other);
  }

  compare(other: TrainingSelectionReportModel)  {
    if (this.lt(other)) {
      return 1;
    } else if (this.gt(other)) {
      return -1;
    } else {
      return 0;
    }
  }
}
