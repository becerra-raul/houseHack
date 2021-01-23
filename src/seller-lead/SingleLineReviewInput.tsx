import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, mainTextColor, mediumDarknessTextColor, vibrantBlue } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";
import * as Icons from "@material-ui/icons";
import { DashedUnderline } from "./CommonStyledFormElements";

interface MyProps {
  labelText: string;
  inputValue: string;
  onClickToEdit: () => void;
}

const StyledInputReview = styled(Typography)`
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;
  font-size: 28px;
  line-height: 30px;

  color: ${vibrantBlue};
`;

const StyledInputReviewLabel = styled(Typography)`
  color: ${mainTextColor};
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #39486b;
`;
const StyledInputLineContainer = styled.div`
  width: 350px;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;

  @media screen and (max-width: ${maxMobileWidth}px) {
    width: 100%;
  }
`;

const StyledEditIcon = styled(Icons.Edit)`
  margin-left: 1px;
  vertical-align: -1px;
  text-decoration: none;
  width: 20px;
  height: 20px;
  color: ${fadedBlue};
`;

const SingleLineReviewInput = (props: MyProps) => {
  const { labelText, inputValue, onClickToEdit } = props;
  return (
    <StyledInputLineContainer>
      <StyledInputReviewLabel>{labelText}</StyledInputReviewLabel>
      <StyledInputReview onClick={onClickToEdit}>
        <DashedUnderline>{inputValue}</DashedUnderline> <StyledEditIcon />
      </StyledInputReview>
    </StyledInputLineContainer>
  );
};

export default SingleLineReviewInput;
