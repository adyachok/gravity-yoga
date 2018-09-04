import { Component, OnInit } from '@angular/core';

import {TrainingService} from '../services/training.service';
import {TrainingModel} from '../models/training.model';
import {DiscountsService} from '../services/discounts.service';
import {DiscountOptionModel} from '../models/discount-option.model';
import {TrainingSelectionReportModel} from '../models/training-selection-report.model';
import {CalculationService} from '../services/calculation.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  trainings: TrainingModel[];
  frequencyDiscountOptions: DiscountOptionModel[];
  durationDiscountOptions: DiscountOptionModel[];

  constructor(private trainingService: TrainingService,
              private discountsService: DiscountsService,
              private calculationService: CalculationService) { }

  processTrainingSelectionEvent(event: TrainingSelectionReportModel) {
    this.calculationService.processReport(event);
  }

  ngOnInit() {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
    this.frequencyDiscountOptions = this.discountsService.getFrequencyDiscount().getOptions();
    this.durationDiscountOptions = this.discountsService.getDurationDiscount().getOptions();
  }

}
