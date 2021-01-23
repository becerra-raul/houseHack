import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledFormControlLabel,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledRadio,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const PaintForm = (props: MyProps) => {
  const form: any = useFormikContext();

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>
          Are the common areas (living, dining, hallways, foyer) in your property painted with neutral colors?
        </StyledQuestionTitle>
        <StyledQuestionSubtitle>
          White, beige, and light gray are common examples of neutral colors.
        </StyledQuestionSubtitle>
      </StyledPageIntroContainer>
      <Field component={FormikMui.RadioGroup} name="paintType">
        <StyledFormControlLabel value={"all_neutral"} control={<StyledRadio />} label="All walls are neutral colors" />
        {form.values.paintType === "all_neutral" && <PaintConditionSubquestion />}
        <StyledFormControlLabel value={"no_neutral"} control={<StyledRadio />} label="No walls are neutral colors" />
        {form.values.paintType === "no_neutral" && <PaintConditionSubquestion />}
        <StyledFormControlLabel
          value={"mostly_neutral"}
          control={<StyledRadio />}
          label="It’s a mix, but mostly neutral"
        />
        {form.values.paintType === "mostly_neutral" && <PaintConditionSubquestion />}
        <StyledFormControlLabel
          value={"mostly_bold"}
          control={<StyledRadio />}
          label="It’s a mix, but mostly bold colors"
        />
        {form.values.paintType === "mostly_bold" && <PaintConditionSubquestion />}
      </Field>
      <br />
      <br />
      <br />
    </>
  );
};

const PaintConditionSubquestion = () => {
  return (
    <StyledSubquestionContainer>
      <StyledSubquestionTitle>What is the condition of your paint?</StyledSubquestionTitle>
      <FormGroup>
        <Field component={FormikMui.RadioGroup} name="paintCondition">
          <StyledFormControlLabel value={"new"} control={<StyledRadio />} label="Looks brand new" />
          <StyledFormControlLabel
            value={"average"}
            control={<StyledRadio />}
            label="Average / minor scuffs and scratches"
          />
          <StyledFormControlLabel
            value={"poor"}
            control={<StyledRadio />}
            label="Needs work / major scuffs and dents"
          />
        </Field>
      </FormGroup>
    </StyledSubquestionContainer>
  );
};

export default PaintForm;
