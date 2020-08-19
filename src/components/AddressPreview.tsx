import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Clipboard from "clipboard";

import { Address } from "../data/boardsOfElections";

const AddressPreviewContainer = styled.div`
  font-size: 18px;
  height: 8em;
  min-width: 400px;
`;

const AddressLine = styled.div`
  font-size: 18px;
  height: 1.66em;
  border-bottom: 2px solid #8f8f8f;
  padding: 0 20px;
  margin: 10px 0;
  text-align: center;
`;

const AddressPreviewLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 8px;
  border-bottom: 2px solid #8f8f8f;
`;

const AddressPreviewFooter = styled.div`
  text-align: right;
`;

const AddressPreviewCopyButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  height: 28px;
  font-size: 14px;
  color: #282c34;
  background-color: #0e9daa;
  border-radius: 4px;
  border: none;
  padding: 0 8px;
  line-height: 14px;
`;

interface AddressPreviewProps {
  countyName?: string;
  address?: Address;
}

const AddressPreview = ({ countyName, address }: AddressPreviewProps) => {
  useEffect(() => {
    let clipboard = new Clipboard('[name="copyAddress"]');
    return () => clipboard.destroy();
  }, []);

  const { streetAddress, streetAddress2, streetAddress3, city, zipcode } = {
    ...address,
  };

  const attentionLine = countyName
    ? `ATTN: ${countyName} Board of Elections`
    : "";
  const cityStateZip = city && zipcode ? `${city}, NY ${zipcode}` : "";

  const lineOne = streetAddress;
  const lineTwo = streetAddress2 || cityStateZip;
  const lineThree = streetAddress2 ? streetAddress3 || cityStateZip : "";
  const lineFour = streetAddress3 ? cityStateZip : "";

  const addressString =
    `${attentionLine}\n` +
    `${lineOne}\n` +
    `${lineTwo}${lineThree && "\n"}` +
    `${lineThree}${lineFour && "\n"}`;

  return (
    <AddressPreviewContainer>
      <AddressPreviewLabel>Mailing Address:</AddressPreviewLabel>
      <AddressLine>{attentionLine}</AddressLine>
      <AddressLine>{lineOne}</AddressLine>
      <AddressLine>{lineTwo}</AddressLine>
      <AddressLine>{lineThree}</AddressLine>
      <AddressLine>{lineFour}</AddressLine>
      <AddressPreviewFooter>
        <AddressPreviewCopyButton
          name="copyAddress"
          data-clipboard-text={addressString}
        >
          Copy
        </AddressPreviewCopyButton>
      </AddressPreviewFooter>
    </AddressPreviewContainer>
  );
};

export default AddressPreview;