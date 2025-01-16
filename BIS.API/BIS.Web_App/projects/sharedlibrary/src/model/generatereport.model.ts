import { BaseEntity } from "./base.model";
import { ImasterData } from "./masterdata.model"

export class GenerateReport extends BaseEntity {

    reportGenId?: number;
  reportType: string;
  reportDate: Date;
  reportTitle: string;
//   "userId"?: string,
  notes: string;
  startDate: string;
  endDate:string
  masterData:ImasterData[]
  MasterDataIds:string;
}