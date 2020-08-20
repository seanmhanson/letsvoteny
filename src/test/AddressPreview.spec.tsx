import React from "react";
import { render } from "@testing-library/react";

import { Address } from "../data/boardsOfElections";
import AddressPreview, {
  AddressPreviewProps,
} from "../components/AddressPreview";

interface QueryResults {
  [key: string]: HTMLElement | null;
}

const fixtures = {
  COUNTY_NAME: "Lanayru County",
  STREET_ADDRESS: "Lanayru Great Spring",
  STREET_ADDRESS2: "Zora's Domain",
  STREET_ADDRESS3: "Dagah Keek Shrine",
  CITY: "Hyrule",
  ZIPCODE: "02235",
};

const countyName = fixtures.COUNTY_NAME;
const baseAddress: Address = {
  streetAddress: fixtures.STREET_ADDRESS,
  city: fixtures.CITY,
  zipcode: fixtures.ZIPCODE,
};
const attentionLine = `ATTN: ${countyName} Board of Elections`;
const cityZipLine = `${fixtures.CITY}, NY ${fixtures.ZIPCODE}`;

describe("components/AddressPreview.tsx", () => {
  let queryResults: QueryResults = {};

  const renderComponent = (props: AddressPreviewProps = {}) => {
    const { queryByTestId } = render(<AddressPreview {...props} />);
    queryResults = {
      lineOne: queryByTestId("line-one"),
      lineTwo: queryByTestId("line-two"),
      lineThree: queryByTestId("line-three"),
      lineFour: queryByTestId("line-four"),
      lineFive: queryByTestId("line-five"),
      copyButton: queryByTestId("copy-address-button"),
    };
  };

  describe("when rendered without an address or county name", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("does not render any address line content", () => {
      expect(queryResults.lineOne).toBeEmpty();
      expect(queryResults.lineTwo).toBeEmpty();
      expect(queryResults.lineThree).toBeEmpty();
      expect(queryResults.lineFour).toBeEmpty();
      expect(queryResults.lineFive).toBeEmpty();
    });

    it("renders a disabled copy button", () => {
      expect(queryResults.copyButton).toBeDisabled();
    });
  });

  describe("when rendered with a single line street address", () => {
    beforeEach(() => {
      renderComponent({ countyName, address: baseAddress });
    });

    it("renders only the expected content", () => {
      expect(queryResults.lineOne).toHaveTextContent(attentionLine);
      expect(queryResults.lineTwo).toHaveTextContent(fixtures.STREET_ADDRESS);
      expect(queryResults.lineThree).toHaveTextContent(cityZipLine);
      expect(queryResults.lineFour).toBeEmpty();
      expect(queryResults.lineFive).toBeEmpty();
    });

    it("renders a copy button", () => {
      expect(queryResults.copyButton).not.toBeDisabled();
    });
  });

  describe("when rendered with a two line street address", () => {
    beforeEach(() => {
      const address: Address = {
        streetAddress2: fixtures.STREET_ADDRESS2,
        ...baseAddress,
      };
      renderComponent({ countyName, address });
    });

    it("renders only the expected content", () => {
      expect(queryResults.lineOne).toHaveTextContent(attentionLine);
      expect(queryResults.lineTwo).toHaveTextContent(fixtures.STREET_ADDRESS);
      expect(queryResults.lineThree).toHaveTextContent(
        fixtures.STREET_ADDRESS2
      );
      expect(queryResults.lineFour).toHaveTextContent(cityZipLine);
      expect(queryResults.lineFive).toBeEmpty();
    });

    it("renders a copy button", () => {
      expect(queryResults.copyButton).not.toBeDisabled();
    });
  });

  describe("when rendered with a three line street address", () => {
    beforeEach(() => {
      const address: Address = {
        streetAddress2: fixtures.STREET_ADDRESS2,
        streetAddress3: fixtures.STREET_ADDRESS3,
        ...baseAddress,
      };
      renderComponent({ countyName, address });
    });

    it("renders only the expected content", () => {
      expect(queryResults.lineOne).toHaveTextContent(attentionLine);
      expect(queryResults.lineTwo).toHaveTextContent(fixtures.STREET_ADDRESS);
      expect(queryResults.lineThree).toHaveTextContent(
        fixtures.STREET_ADDRESS2
      );
      expect(queryResults.lineFour).toHaveTextContent(fixtures.STREET_ADDRESS3);
      expect(queryResults.lineFive).toHaveTextContent(cityZipLine);
    });

    it("renders a copy button", () => {
      expect(queryResults.copyButton).not.toBeDisabled();
    });
  });
});
