import { Tag, TimelineEvent, ElectionDateTime } from "./timelineEvent";

const registrationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 25 }),
  tags: [Tag.Registration, Tag.Federal],
  description:
    "Last date for in-person voter registration by special federal voters",
};

const absenteeFormUnregistered: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 25 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest, Tag.Federal],
  description:
    "Received due date for Absentee Ballot Requests by unregistered special federal voters",
};

const absenteeFormRegistered: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 7 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest, Tag.Federal],
  description:
    "Received due date for Absentee Ballot Requests by registered special federal voters",
};

const ballotPostmarkDate: TimelineEvent = {
  date: ElectionDateTime,
  tags: [Tag.Absentee, Tag.AbsenteeBallot, Tag.Federal],
  description: "Postmark due date for casting Absentee Ballots",
};

const ballotReceivedDate: TimelineEvent = {
  date: ElectionDateTime.plus({ days: 13 }),
  tags: [Tag.Absentee, Tag.AbsenteeBallot, Tag.Federal],
  description:
    "Received due date for Absentee Ballots for special federal voters",
};

const federalAbsenteeEvents: Array<TimelineEvent> = [
  registrationDate,
  absenteeFormUnregistered,
  absenteeFormRegistered,
  ballotPostmarkDate,
  ballotReceivedDate,
];

export default federalAbsenteeEvents;
