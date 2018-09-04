import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

import {CalculationService} from '../services/calculation.service';
import {TrainingSelectionReportModel} from '../models/training-selection-report.model';
import {MatTableDataSource} from '@angular/material';
import {TotalModel} from '../models/TotalModel';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataSource: MatTableDataSource<TrainingSelectionReportModel>;
  totalDataSource: MatTableDataSource<TotalModel>;

  constructor(private calculationService: CalculationService, private changeDetectorRefs: ChangeDetectorRef) {
    this.calculationService.events$.subscribe(reports => {
      this.dataSource = new MatTableDataSource<TrainingSelectionReportModel>(reports);
      this.totalDataSource = new MatTableDataSource<TotalModel>([this.buildTotalReport(reports)]);
      this.changeDetectorRefs.detectChanges();
    });
  }

  buildTotalReport(reports: TrainingSelectionReportModel[]): TotalModel {
    let totalPrice = 0;
    let totalDiscount = 0;
    _.each(reports, (report) => {
      totalPrice += report.summary.totalPriceForAllTrainings;
      totalDiscount += report.summary.totalDiscountForAllTrainings;
    });
    return new TotalModel(totalPrice, totalDiscount);
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource<TrainingSelectionReportModel>([]);
    this.totalDataSource = new MatTableDataSource<TotalModel>([]);
  }

}
