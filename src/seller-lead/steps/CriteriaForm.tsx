import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledCheckbox,
  StyledFormControlLabel,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const CriteriaForm = (props: MyProps) => {
  const form: any = useFormikContext();

  const onCheckboxChange = onChangeForCheckboxesWithNoneOfTheAbove(form, "hasIssueNone", [
    "hasIssueFoundation",
    "hasIssueChemicalContamination",
    "hasIssueFireDamage",
    "hasIssueFloodHistory",
    "hasIssueWellWater",
    "hasIssueSepticSystem",
    "hasIssueAsbestosSiding",
  ]);

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Does your property have any of the following? (Select all that apply)</StyledQuestionTitle>
        <StyledQuestionSubtitle>
          These are uncommon but we may not be able to purchase your home if some of these conditions apply.
        </StyledQuestionSubtitle>
      </StyledPageIntroContainer>
      <FormGroup>
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueFoundation}
              onChange={onCheckboxChange}
              name="hasIssueFoundation"
            />
          }
          label="Known foundation issues"
        />
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueChemicalContamination}
              onChange={onCheckboxChange}
              name="hasIssueChemicalContamination"
            />
          }
          label="Previous chemical contamination"
        />

        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueFireDamage}
              onChange={onCheckboxChange}
              name="hasIssueFireDamage"
            />
          }
          label="Previous or current fire damage"
        />
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueFloodHistory}
              onChange={onCheckboxChange}
              name="hasIssueFloodHistory"
            />
          }
          label="Flood history"
        />
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueWellWater}
              onChange={onCheckboxChange}
              name="hasIssueWellWater"
            />
          }
          label="Well water"
        />
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueSepticSystem}
              onChange={onCheckboxChange}
              name="hasIssueSepticSystem"
            />
          }
          label="Septic system"
        />
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasIssueAsbestosSiding}
              onChange={onCheckboxChange}
              name="hasIssueAsbestosSiding"
            />
          }
          label="Asbestos siding"
        />

        <StyledFormControlLabel
          control={
            <StyledCheckbox checked={form.values.hasIssueNone} onChange={onCheckboxChange} name="hasIssueNone" />
          }
          label="None of the above"
        />
      </FormGroup>
      <br />
      <br />
      <br />
    </>
  );
};

export default CriteriaForm;
