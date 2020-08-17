import { Tag, TimelineEvent, ElectionDateTime } from "./timelineEvent";

const registrationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 10 }),
  tags: [Tag.Registration, Tag.Military],
  description:
    "Last date for in-person voter registration by eligible military service members",
};

const absenteeFormUnregistered: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 10 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest, Tag.Military],
  description:
    "Received due date for Absentee Ballot Requests by unregistered eligible military voters",
};

const absenteeFormRegistered: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 7 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest, Tag.Military],
  description:
    "Received due date for Absentee Ballot Requests by registered eligible military voters",
};

const inPersonApplicationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 1 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest, Tag.Military],
  description:
    "Last date for in-preson Absentee Ballot Requests by registered eligible military voters",
};

const ballotPostmarkDate: TimelineEvent = {
  date: ElectionDateTime,
  tags: [Tag.Absentee, Tag.AbsenteeBallot, Tag.Military],
  description: "Postmark due date for casting Absentee Ballots",
};

const ballotReceivedDate: TimelineEvent = {
  date: ElectionDateTime.plus({ days: 15 }),
  tags: [Tag.Absentee, Tag.AbsenteeBallot, Tag.Military],
  description:
    "Received due date for Absentee Ballots for eligible military voters",
};

const militaryAbsenteeEvents: Array<TimelineEvent> = [
  registrationDate,
  absenteeFormUnregistered,
  absenteeFormRegistered,
  inPersonApplicationDate,
  ballotPostmarkDate,
  ballotReceivedDate,
];

export default militaryAbsenteeEvents;
