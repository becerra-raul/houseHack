import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledDivBasedRadioGroup,
  StyledFormControlLabel,
  StyledPageIntroContainer,
  StyledQuestionTitle,
  StyledRadio,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
  StyledTextOnlySelectorItem,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const SolarForm = (props: MyProps) => {
  const form: any = useFormikContext();

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Does your property have solar panels?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="hasSolar">
        <StyledTextOnlySelectorItem data-value="yes">Yes</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value="no">No</StyledTextOnlySelectorItem>
      </StyledDivBasedRadioGroup>

      {/* <Field component={FormikMui.RadioGroup} name="hasSolar">
        <StyledFormControlLabel value={"yes"} control={<StyledRadio />} label="Yes" /> */}

      {form.values.hasSolar === "yes" && (
        <StyledSubquestionContainer>
          <StyledSubquestionTitle>Do you own or lease them?</StyledSubquestionTitle>
          <FormGroup>
            <Field component={FormikMui.RadioGroup} name="solarType">
              <StyledFormControlLabel value={"owned"} control={<StyledRadio />} label="Owned" />
              <StyledFormControlLabel value={"leased"} control={<StyledRadio />} label="Leased" />
            </Field>
          </FormGroup>
        </StyledSubquestionContainer>
      )}
      {/* <StyledFormControlLabel value={"no"} control={<StyledRadio />} label="No" />
      </Field> */}
    </>
  );
};

export default SolarForm;
