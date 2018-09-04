import {DecisionModel} from './decision.model';
import {DecisionType} from './decision-type.enum';

export class DurationModel extends DecisionModel {

  constructor(value: number, trainingName: string) {
    super();
    this.value = value;
    this.trainingName = trainingName;
    this.type = DecisionType.DURATION;
  }
}
