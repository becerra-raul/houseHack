import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography } from "@material-ui/core";
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
  StyledSubtextfieldContainer,
  StyledTextOnlySelectorItem,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const CoveredParkingForm = (props: MyProps) => {
  const form: any = useFormikContext();

  const onCheckboxChange = onChangeForCheckboxesWithNoneOfTheAbove(form, "hasNeitherGarageOrCarport", [
    "hasGarage",
    "hasCarport",
  ]);

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>What type of covered parking spaces does your property have?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="coveredParkingType">
        <StyledTextOnlySelectorItem data-value="garage">Garage</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value="carport">Carport</StyledTextOnlySelectorItem>
        <StyledTextOnlySelectorItem data-value="none">None</StyledTextOnlySelectorItem>
      </StyledDivBasedRadioGroup>

      {/* {form.values.coveredParkingType == "garage" && (
        <StyledSubtextfieldContainer>
          <Field
            component={FormikMui.TextField}
            label="How many cars fit in your garage?"
            name="numCarGarage"
            fullWidth
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </StyledSubtextfieldContainer>
      )}
      {form.values.coveredParkingType == "carport" && (
        <StyledSubtextfieldContainer>
          <Field
            component={FormikMui.TextField}
            label="How many cars fit in your carport?"
            name="numCarCarport"
            fullWidth
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </StyledSubtextfieldContainer>
      )} */}

      {/* <FormGroup>
        <StyledFormControlLabel
          control={<StyledCheckbox checked={form.values.hasGarage} onChange={onCheckboxChange} name="hasGarage" />}
          label="Garage"
        />
        {form.values.hasGarage && (
          <StyledSubtextfieldContainer>
            <Field
              component={FormikMui.TextField}
              label="How many cars fit in your garage?"
              name="numCarGarage"
              fullWidth
              variant="outlined"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </StyledSubtextfieldContainer>
        )}
        <StyledFormControlLabel
          control={<StyledCheckbox checked={form.values.hasCarport} onChange={onCheckboxChange} name="hasCarport" />}
          label="Carport"
        />
        {form.values.hasCarport && (
          <StyledSubtextfieldContainer>
            <Field
              component={FormikMui.TextField}
              label="How many cars fit in your carport?"
              name="numCarCarport"
              fullWidth
              variant="outlined"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </StyledSubtextfieldContainer>
        )}
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={form.values.hasNeitherGarageOrCarport}
              onChange={onCheckboxChange}
              name="hasNeitherGarageOrCarport"
            />
          }
          label="None of the above"
        />
      </FormGroup> */}
    </>
  );
};

export default CoveredParkingForm;
