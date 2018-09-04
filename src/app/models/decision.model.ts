import {DecisionType} from './decision-type.enum';

export abstract class DecisionModel {
  value: any;
  trainingName: string;
  type: DecisionType;
}
