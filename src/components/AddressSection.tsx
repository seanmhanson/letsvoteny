import React, { useState } from "react";
import styled from "@emotion/styled";

import boardsOfElections from "../data/boardsOfElections";
import CountySelect, { CountyOption } from "./CountySelect";
import AddressPreview from "./AddressPreview";

import palette from "../styles/palette";
const { black } = palette;

const AddressContainer = styled.div`
  margin: 30px 0;
`;

const AddressSelectContainer = styled.div`
  color: ${black};
  margin-bottom: 30px;
`;

const AddressSection = () => {
  const [activeCountyName, setActiveCountyName] = useState<string>();

  return (
    <AddressContainer>
      <AddressSelectContainer>
        <CountySelect
          activeCountyName={activeCountyName}
          onChange={({ value }: CountyOption) => {
            setActiveCountyName(value);
          }}
          data-testid="county-select"
        />
      </AddressSelectContainer>
      <AddressPreview
        countyName={activeCountyName}
        address={
          activeCountyName
            ? boardsOfElections[activeCountyName]?.address
            : undefined
        }
      />
    </AddressContainer>
  );
};

export default AddressSection;
