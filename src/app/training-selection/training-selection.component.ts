import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import * as _ from 'lodash';

import {TrainingModel} from '../models/training.model';
import {DiscountOptionModel} from '../models/discount-option.model';
import {TrainingSelectionReportModel} from '../models/training-selection-report.model';
import {DetailsDialogComponent} from '../details-dialog/details-dialog.component';
import {DiscountsDialogComponent} from '../discounts-dialog/discounts-dialog.component';

@Component({
  selector: 'app-training-selection',
  templateUrl: './training-selection.component.html',
  styleUrls: ['./training-selection.component.css']
})
export class TrainingSelectionComponent implements OnInit {
  @Input() training: TrainingModel;
  @Input() durationDiscountOptions: DiscountOptionModel[];
  @Input() frequencyDiscountOptions: DiscountOptionModel[];
  isSelected = false;
  durationSelectedValue: number;
  frequencySelectedValue: number;
  @Output() trainingEvent = new EventEmitter<TrainingSelectionReportModel>();

  constructor(public dialog: MatDialog) { }

  select() {
    this.isSelected = !this.isSelected;
    this.trainingEvent.emit(this.buildTrainingSelectionReport());
  }

  update (event: any): void {
    if (this.isSelected) {
      this.trainingEvent.emit(this.buildTrainingSelectionReport());
    }
  }

  openDetailsDialog() {
    this.dialog.open(DetailsDialogComponent, {
      data: {
        training: this.training
      }
    });
  }

  openDiscountsDialog() {
    this.dialog.open(DiscountsDialogComponent, {
      data: {
        training: this.training
      }
    });
  }

  private buildTrainingSelectionReport() {
    return new TrainingSelectionReportModel(_.cloneDeep(this.training),
      _.cloneDeep(this.getDurationDiscountOption(this.durationSelectedValue)),
      _.cloneDeep(this.getFrequencyDiscountOption(this.frequencySelectedValue)),
      this.isSelected);
  }

  private getDurationDiscountOption(value: number): DiscountOptionModel {
    return this.durationDiscountOptions.find(opt => opt.value === value);
  }

  private getFrequencyDiscountOption(value: number): DiscountOptionModel {
    return this.frequencyDiscountOptions.find(opt => opt.value === value);
  }

  ngOnInit() {
    this.durationSelectedValue = this.durationDiscountOptions[0].value;
    this.frequencySelectedValue = this.frequencyDiscountOptions[0].value;
  }

}
