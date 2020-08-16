import { DateTime } from "luxon";
import type { DateTime as DateTimeType } from "luxon";

export enum Tag {
  Military,
  Absentee,
  AbsenteeRequest,
  AbsenteeLetter,
  AbsenteeBallot,
  Registration,
  Election,
  Identification,
}

export interface TimelineEvent {
  date: DateTimeType;
  tags?: Array<Tag>;
  description: String;
}

export const ElectionDateTime = DateTime.local(2020, 11, 3);
