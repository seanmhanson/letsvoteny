import { Tag, TimelineEvent, ElectionDateTime } from "./timelineEvent";

const mailRegistrationPostmark: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 25 }),
  tags: [Tag.Registration],
  description: "Postmark due date for mail-in voter registration",
};

const mailRegistrationReceived: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 20 }),
  tags: [Tag.Registration],
  description: "Received due date for mail-in voter registration",
};

const inPersonRegistrationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 25 }),
  tags: [Tag.Registration],
  description: "Last date for in-person voter registration",
};

const inPersonRecentCitizenRegistrationDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 10 }),
  tags: [Tag.Registration],
  description:
    "Last date for in-pperson voter registration by citizens naturalized after October 9th, 2020",
};

const changeOfAddressDate: TimelineEvent = {
  date: ElectionDateTime.minus({ days: 20 }),
  tags: [Tag.Registration],
  description:
    "Received due date for notices of change of address, in order to vote in the General Election",
};

const voterRegistrationEvents: Array<TimelineEvent> = [
  mailRegistrationPostmark,
  mailRegistrationReceived,
  inPersonRegistrationDate,
  inPersonMilitaryRegistrationDate,
  inPersonRecentCitizenRegistrationDate,
  changeOfAddressDate,
];

export default voterRegistrationEvents;
