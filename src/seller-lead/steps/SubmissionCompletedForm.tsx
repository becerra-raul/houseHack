import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
  StyledTextfieldContainer,
  StyledTextfieldLabel,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import { ReactComponent as CompletionCheckSVG } from "../../images/completion_check.svg";

interface MyProps {}

const StyledCompletionCheckSVG = styled(CompletionCheckSVG)`
  margin: 100px 0 55px;
  max-width: 100%;

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin: 30px 0 25px;
  }
`;

export default function SubmissionCompletedForm(props: MyProps) {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledCompletionCheckSVG />
        <StyledQuestionTitle>Thank you! We got your submission!</StyledQuestionTitle>
        <StyledQuestionSubtitle>
          We'll get back to you shortly! If you have questions in the mean time, send a text to Kevin at (805) 727-3239.
        </StyledQuestionSubtitle>
      </StyledPageIntroContainer>
    </>
  );
}
