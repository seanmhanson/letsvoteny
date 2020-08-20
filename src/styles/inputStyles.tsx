import palette from "./palette";
const { white, gray, lightGray, blue, darkBlue } = palette;

interface OptionOverridesData {
  isFocused: boolean;
  isSelected: boolean;
}

interface IndicatorProps {
  backgroundColor?: string;
  background?: string;
}

// indicator dots

const indicator = ({
  backgroundColor = lightGray,
  background = `linear-gradient(${lightGray}, ${gray})`,
}: IndicatorProps = {}) => {
  return {
    display: "flex",
    alignItems: "center",
    ":before": {
      borderRadius: "100%",
      content: '""',
      display: "block",
      marginRight: "10px",
      height: "10px",
      width: "10px",
      backgroundColor,
      background,
    },
  };
};

const placeholderIndicator = indicator();
const optionIndicator = indicator({ background: "transparent" });
const activeIndicator = indicator({
  backgroundColor: blue,
  background: `linear-gradient(${blue}, ${darkBlue})`,
});

// react-select overrides

const singleValueOverride = (styles: any) => ({
  ...styles,
  ...activeIndicator,
  fontSize: "14px",
});

const placeholderOverride = (styles: any) => ({
  ...styles,
  ...placeholderIndicator,
  fontSize: "14px",
  color: lightGray,
});

const optionOverride = (styles: any, { isSelected }: OptionOverridesData) => {
  let color = isSelected ? white : gray;
  let indicator = isSelected ? activeIndicator : optionIndicator;

  return {
    ...styles,
    color,
    fontSize: "14px",
    ...indicator,
  };
};

export const inputStyles = {
  placeholder: placeholderOverride,
  singleValue: singleValueOverride,
  option: optionOverride,
};
