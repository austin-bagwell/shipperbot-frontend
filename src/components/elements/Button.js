// shamelessly(*) lifted and adapted from dear-petition
// * maybe a litle shame
import styled, { css } from "styled-components";
import {
  colorPrimary,
  colorWhite,
  colorGreen,
  colorCaution,
  greyScale,
} from "../../styles/colors";

export const Button = styled.button`
  font-size: 2.5rem;
  cursor: pointer;
  ${({ colorClass }) => mapTypeToStartingState(colorClass)}
  ${({ disabled }) => disabled && mapTypeToStartingState(DISABLED)}
  border: 0;
  border-radius: 1px;
  padding: 1rem;
  outline: none;

  &:hover,
  :focus {
    color: black;
    background-color: lightpink;
  }
`;

export const POSITIVE = "positive";
export const CAUTION = "caution";
export const NEUTRAL = "neutral";
export const DISABLED = "disabled";

function mapTypeToStartingState(colorClass) {
  switch (colorClass) {
    case POSITIVE:
      return positive;
    case CAUTION:
      return caution;
    case NEUTRAL:
      return neutral;
    case DISABLED:
      return disabled;
    default:
      return positive;
  }
}

const disabled = css`
  background: ${greyScale(7.25)};
  color: ${colorWhite};
`;
const positive = css`
  background: ${colorGreen};
  color: ${colorWhite};
`;
const caution = css`
  background: ${colorCaution};
  color: ${colorWhite};
`;

const neutral = css`
  background: ${colorWhite};
  color: ${colorPrimary};
`;
