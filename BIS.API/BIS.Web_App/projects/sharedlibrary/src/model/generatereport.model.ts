import { ImasterData } from "./masterdata.model"

export interface IgenerateReport {
    reportGenId?: number,
  reportType: string,
  reportDate: Date,
  reportTitle: string,
//   "userId"?: string,
  notes: string,
  startDate: string,
  endDate:string
  masterData:ImasterData[]
}