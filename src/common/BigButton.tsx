import { Button } from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, vibrantBlue } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";

export const BigButton = styled(Button)`
  background: ${vibrantBlue};
  color: white;
  border-radius: 1000px;
  min-width: 150px;
  padding: 15px 20px;
  height: 60px;

  box-shadow: 0px 3px 1px -2px ${fadedBlue}, 0px 2px 2px 0px ${fadedBlue}, 0px 1px 5px 0px ${fadedBlue};

  &.Mui-disabled {
    box-shadow: none;
    opacity: 0.4;
    background: ${vibrantBlue};
    color: white;
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    min-width: 120px;
    width: 49%;
  }
`;

export const SecondaryBigButton = styled(BigButton)`
  background: ${fadedBlue};
  color: ${vibrantBlue};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  &:hover {
    background: #b1e3f5;
  }
`;

export const ExpandingBigButton = styled(BigButton)`
  min-width: 120px;
  width: 49%;
`;

export const ExpandingSecondaryBigButton = styled(SecondaryBigButton)`
  min-width: 120px;
  width: 49%;
`;
