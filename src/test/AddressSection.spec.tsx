import React from "react";
import { render } from "@testing-library/react";

import AddressSection from "../components/AddressSection";

jest.mock("react-select", () => ({ value }: { value?: string }) => (
  <select value={value} data-testid="county-select" />
));

describe("components/AddressSection", () => {
  let countySelect: HTMLElement | null;
  let addressPreview: HTMLElement | null;

  const renderComponent = () => {
    const { queryByTestId } = render(<AddressSection />);
    countySelect = queryByTestId("county-select");
    addressPreview = queryByTestId("address-preview");
  };

  describe("when rendered", () => {
    beforeEach(() => renderComponent());

    it("renders a county select with no active option", () => {
      const activeOption = countySelect?.getAttribute("value");

      expect(countySelect).toBeInTheDocument();
      expect(activeOption).toBeNull();
    });

    it("renders an address preview with no active address", () => {
      expect(addressPreview).toBeInTheDocument();
    });
  });
});
