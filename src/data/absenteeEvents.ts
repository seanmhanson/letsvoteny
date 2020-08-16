import { Tag, TimelineEvent, ElectionDateTime } from "./timelineEvent";

// absentee ballot request forms

const formPostmarkDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 7 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest],
  description: "Postmark due date for Absentee Ballot Request Forms",
};

const inPersonApplicationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 1 }),
  tags: [Tag.Absentee, Tag.AbsenteeRequest],
  description: "Last date for turning in Absentee Ballot Requests in-person",
};

// absentee ballot request letters

const letterPostmarkDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 7 }),
  tags: [Tag.Absentee, Tag.AbsenteeLetter],
  description: "Postmark due date for Absentee Ballot Request Letters",
};

const letterReceivedAfter: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 30 }),
  tags: [Tag.Absentee, Tag.AbsenteeLetter],
  description: "Earliest postmark date for Absentee Ballot Request Letters",
};

// absentee ballots

const ballotPostmarkDate: TimelineEvent = {
  date: ElectionDateTime,
  tags: [Tag.Absentee, Tag.AbsenteeBallot],
  description: "Postmark due date for casting Absentee Ballots",
};

const ballotReceivedDate: TimelineEvent = {
  date: ElectionDateTime.plus({ days: 7 }),
  tags: [Tag.Absentee, Tag.AbsenteeBallot],
  description: "Received due date for Absentee Ballots",
};

const inPersonBallotDate: TimelineEvent = {
  date: ElectionDateTime,
  tags: [Tag.Absentee, Tag.AbsenteeBallot],
  description: "Last date for turning in Absentee Ballots in-person",
};

const absenteeEvents: Array<TimelineEvent> = [
  formPostmarkDate,
  inPersonApplicationDate,
  letterPostmarkDate,
  letterReceivedAfter,
  ballotPostmarkDate,
  ballotReceivedDate,
  inPersonBallotDate,
];

export default absenteeEvents;
