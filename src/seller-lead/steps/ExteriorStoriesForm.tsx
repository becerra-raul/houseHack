import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledDivBasedRadioGroup,
  StyledImageTextSelectorItem,
  StyledNumberButton,
  StyledNumberButtonContainer,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
  StyledTextOnlySelectorItem,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import SingleLineReviewInput from "../SingleLineReviewInput";
import FormikButtonBasedRadioGroupField from "../../common/FormikButtonBasedRadioGroupField";

interface MyProps {}

const ExteriorStoriesForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>How many floors does your property have?</StyledQuestionTitle>
        <StyledQuestionSubtitle>Don't count the basement as a separate floor</StyledQuestionSubtitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="exteriorStories">
        <StyledTextOnlySelectorItem data-value={1}>1</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value={2}>2</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value={3}>3</StyledTextOnlySelectorItem>
      </StyledDivBasedRadioGroup>
    </>
  );
};

export default ExteriorStoriesForm;
