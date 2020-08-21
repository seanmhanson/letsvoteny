/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { defaultFont } from "../styles/GlobalStyles";
import palette from "../styles/palette";
const { white, darkGray, blue, lightBlue } = palette;

export enum ButtonSize {
  Small,
  Default,
  Large,
}

export enum ButtonVariant {
  Primary,
  Secondary,
  Informational,
}

const buttonBaseStyles = css`
  color: unset;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  background-color: unset;
  border-radius: 4px;
  border: 0;
  padding: 0;
  font-weight: bold;
  ${defaultFont}
`;

const smallSizeStyles = css`
  height: 28px;
  font-size: 14px;
  padding: 0 8px;
`;

const mediumSizeStyles = css`
  height: 34px;
  font-size: 16px;
  padding: 0 10px;
`;

const largeSizeStyles = css`
  height: 40px;
  font-size: 16px;
  padding: 0 12px;
`;

const getButtonSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.Small:
      return smallSizeStyles;
    case ButtonSize.Default:
      return mediumSizeStyles;
    case ButtonSize.Large:
      return largeSizeStyles;
  }
};

const primaryButtonStyles = css`
  color: ${darkGray};
  background-color: ${blue};
`;

const invertedPrimaryStyles = css`
  color: ${blue};
  border: 3px solid ${blue};
`;

const secondaryButtonStyles = css`
  color: ${darkGray};
  background-color: ${lightBlue};
`;

const invertedSecondaryStyles = css`
  color: ${lightBlue};
  border: 3px solid ${lightBlue};
`;

const informationalButtonStyles = css`
  color: ${darkGray};
  background-color: ${white};
`;

const invertedInformationalStyles = css`
  color: ${white};
  border: 3px solid ${white};
`;

const getButtonVariantStyles = (variant: ButtonVariant, inverted: boolean) => {
  switch (variant) {
    case ButtonVariant.Primary:
      return inverted ? invertedPrimaryStyles : primaryButtonStyles;
    case ButtonVariant.Secondary:
      return inverted ? invertedSecondaryStyles : secondaryButtonStyles;
    case ButtonVariant.Informational:
      return inverted ? invertedInformationalStyles : informationalButtonStyles;
  }
};

interface ButtonProps {
  name: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  inverted?: boolean;
  disabled?: boolean;
  children: React.ReactChild;
}

const Button = ({
  size = ButtonSize.Default,
  variant = ButtonVariant.Primary,
  inverted = false,
  disabled = false,
  name,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      name={name}
      type="button"
      disabled={disabled}
      css={[
        buttonBaseStyles,
        getButtonSizeStyles(size),
        getButtonVariantStyles(variant, inverted),
      ]}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
