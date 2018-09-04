import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {TrainingSelectionReportModel} from '../models/training-selection-report.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CalculationService {
  private selectedTrainingReports: TrainingSelectionReportModel[] = [];
  private setEventSource = new Subject<TrainingSelectionReportModel[]>();

  events$ = this.setEventSource.asObservable();

  announce(event: TrainingSelectionReportModel[]) {
    this.setEventSource.next(event);
  }

  processReport(report: TrainingSelectionReportModel) {
    if (report.isSelected) {
      this.add(report);
    } else {
      this.delete(report);
    }
    let reports = this.getAll();
    reports.sort((a: TrainingSelectionReportModel, b: TrainingSelectionReportModel) => a.compare(b));
    if (reports.length > 1) {
      reports = this.countPriorityTrainingAndQuantityDiscount(reports);
    }
    this.announce(reports);
  }

  get(report: TrainingSelectionReportModel): TrainingSelectionReportModel {
    return _.cloneDeep(this.selectedTrainingReports.find(
      selected => selected.training.name === report.training.name));
  }

  getAll(): TrainingSelectionReportModel[] {
    return _.cloneDeep(this.selectedTrainingReports);
  }

  private add(report: TrainingSelectionReportModel) {
    this.delete(report);
    this.selectedTrainingReports = _.concat(this.selectedTrainingReports, report);
  }

  private delete(report: TrainingSelectionReportModel) {
    _.remove(this.selectedTrainingReports, (selected) => selected.training.name === report.training.name);
  }

  private countPriorityTrainingAndQuantityDiscount(reports: TrainingSelectionReportModel[]): TrainingSelectionReportModel[] {
      const priorityTrainingsNames = ['Tренировка GraVitiYoga в группе', 'Урок GraVitiYoga с персональным инструктором'];
      for (const priorityTrainingName of priorityTrainingsNames) {
        const index = _.findIndex(reports, (item) => item.training.name === priorityTrainingName);
        if (index !== -1) {
            return this.updateReports(reports, index);
        }
      }
    return this.updateReports(reports, 0);
  }

  private updateReports(reports, index) {
    const priorityTraining = reports.splice(index, 1);
    reports = this.updateTotalDiscount(_.cloneDeep(reports));
    return _.concat(priorityTraining, reports);
  }

  private updateTotalDiscount(reports: TrainingSelectionReportModel[]): TrainingSelectionReportModel[] {
    for (const item of reports) {
      item.updateSummary(30);
    }
    return reports;
  }

}
