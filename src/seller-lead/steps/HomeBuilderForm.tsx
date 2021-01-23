import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledDivBasedRadioGroup,
  StyledPageIntroContainer,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
  StyledTextOnlySelectorItem,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const HomeBuilderForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Are you currently working with a home builder?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="workingWithHomebuilder">
        <StyledTextOnlySelectorItem data-value="yes">Yes</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value="no">No</StyledTextOnlySelectorItem>
      </StyledDivBasedRadioGroup>

      {/* <Field component={FormikMui.RadioGroup} name="workingWithHomebuilder">
        <StyledFormControlLabel value={"yes"} control={<StyledRadio />} label="Yes" />
        <StyledFormControlLabel value={"no"} control={<StyledRadio />} label="No" />
      </Field> */}
    </>
  );
};

export default HomeBuilderForm;
