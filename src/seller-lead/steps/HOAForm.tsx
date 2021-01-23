import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledCheckbox,
  StyledDivBasedRadioGroup,
  StyledFormControlLabel,
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

const HOAForm = (props: MyProps) => {
  const form: any = useFormikContext();

  const onCheckboxChange = onChangeForCheckboxesWithNoneOfTheAbove(form, "isHOANeither", [
    "isHOAAgeRestricted",
    "isHOAGated",
  ]);

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Is your property part of a home owner’s association (HOA)?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="isHOA">
        <StyledTextOnlySelectorItem data-value="yes">Yes</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value="no">No</StyledTextOnlySelectorItem>
      </StyledDivBasedRadioGroup>

      {/* <Field component={FormikMui.RadioGroup} name="isHOA">
        <StyledFormControlLabel value={"yes"} control={<StyledRadio />} label="Yes" /> */}

      {form.values.isHOA === "yes" && (
        <StyledSubquestionContainer>
          <StyledSubquestionTitle>Is your property in an age-restricted or gated community?</StyledSubquestionTitle>
          <FormGroup>
            <StyledFormControlLabel
              control={
                <StyledCheckbox
                  checked={form.values.isHOAAgeRestricted}
                  onChange={onCheckboxChange}
                  name="isHOAAgeRestricted"
                />
              }
              label="Age restricted community"
            />
            <StyledFormControlLabel
              control={
                <StyledCheckbox checked={form.values.isHOAGated} onChange={onCheckboxChange} name="isHOAGated" />
              }
              label="Gated community"
            />

            <StyledFormControlLabel
              control={
                <StyledCheckbox checked={form.values.isHOANeither} onChange={onCheckboxChange} name="isHOANeither" />
              }
              label="None of the above"
            />
          </FormGroup>
        </StyledSubquestionContainer>
      )}
      {/* <StyledFormControlLabel value={"no"} control={<StyledRadio />} label="No" />
      </Field> */}
      <br />
      <br />
      <br />
    </>
  );
};

export default HOAForm;
