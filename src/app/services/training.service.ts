import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TrainingModel} from '../models/training.model';
import 'rxjs/add/observable/of';

import {trainings} from '../data/trainings';

@Injectable()
export class TrainingService {
  public getTrainings(): Observable<TrainingModel[]> {
    return Observable.of(trainings);
  }
}
