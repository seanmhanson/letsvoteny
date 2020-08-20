import React from "react";
import Select from "react-select";

import boardsOfElections from "../data/boardsOfElections";
import { inputStyles } from "../styles/inputStyles";

export interface CountyOption {
  label: string;
  value: string;
}

interface CountySelectProps {
  activeCountyName?: string;
  onChange: Function;
}

const countyOptions: Array<CountyOption> = Reflect.ownKeys(
  boardsOfElections
).map((key) => {
  const countyName = key as string;
  return {
    label: boardsOfElections[countyName].displayName,
    value: countyName,
  };
});

const CountySelect = ({ activeCountyName, onChange }: CountySelectProps) => {
  let activeOption;
  if (activeCountyName) {
    activeOption = {
      label: boardsOfElections[activeCountyName]?.displayName,
      value: activeCountyName,
    };
  }

  return (
    <Select
      placeholder="Select a County"
      name="County Name"
      value={activeOption}
      options={countyOptions}
      onChange={(option) => onChange(option)}
      styles={inputStyles}
      isSearchable
    />
  );
};

export default CountySelect;
