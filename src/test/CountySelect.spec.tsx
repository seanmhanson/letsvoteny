import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CountySelect, { CountyOption } from "../components/CountySelect";

interface ReactSelectMockProps {
  options: Array<CountyOption>;
  value?: string;
  onChange: Function;
}

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

jest.mock(
  "react-select",
  () => ({ options, value, onChange }: ReactSelectMockProps) => {
    const onChangeHandler = ({
      currentTarget: { value: currentValue },
    }: SelectEvent) => {
      const option = options.find(({ value }) => value === currentValue);
      onChange(option);
    };

    return (
      <select
        data-testid="county-select"
        value={value}
        onChange={onChangeHandler}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

describe("components/CountySelect", () => {
  let onChangeMock: Function;
  let countySelect: HTMLElement | null;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  const renderComponent = (activeCountyName?: string) => {
    const { queryByTestId } = render(
      <CountySelect
        activeCountyName={activeCountyName}
        onChange={onChangeMock}
      />
    );
    countySelect = queryByTestId("county-select");
  };

  describe("when rendered without an active county", () => {
    beforeEach(() => renderComponent());

    it("renders the county select", () => {
      expect(countySelect).toBeInTheDocument();
    });

    it("does not set an active county", () => {
      const activeOption = countySelect?.getAttribute("value");
      expect(activeOption).toBeNull();
    });

    describe("when the county select is changed", () => {
      const kingsCountyOption: CountyOption = {
        value: "Kings County",
        label: "Kings County (Brooklyn)",
      };

      beforeEach(() => {
        fireEvent.change(countySelect as Element, {
          target: { value: "Kings County" },
        });
      });

      it("calls the change handler", () => {
        expect(onChangeMock).toHaveBeenCalled();
        expect(onChangeMock).toHaveBeenCalledWith(kingsCountyOption);
      });
    });
  });

  describe("when rendered with an active county", () => {
    beforeEach(() => renderComponent("Cayuga County"));

    it("renders the county select", () => {
      expect(countySelect).toBeInTheDocument();
    });

    it("sets an active county", () => {
      const activeOption = countySelect?.getAttribute("value");
      expect(activeOption).not.toBeUndefined();
    });
  });
});
