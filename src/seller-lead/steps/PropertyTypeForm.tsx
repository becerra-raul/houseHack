import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, mainTextColor, mediumDarknessTextColor, vibrantBlue } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledDivBasedRadioGroup,
  StyledImageTextSelectorItem,
  StyledPageIntroContainer,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import DivBasedRadioGroup from "../../common/DivBasedRadioGroup";
import { ReactComponent as SingleFamilySVG } from "../../images/single_family.svg";
import { ReactComponent as MultiFamilySVG } from "../../images/multi_family.svg";

interface MyProps {}

export default function PropertyTypeForm(props: MyProps) {
  const form: any = useFormikContext();
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>What kind of property do you have?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="propertyType">
        <StyledImageTextSelectorItem data-value="single_family">
          <SingleFamilySVG />
          <div>Single Family</div>
        </StyledImageTextSelectorItem>
        <StyledImageTextSelectorItem data-value="multi_family">
          <MultiFamilySVG />
          <div>Multifamily</div>
        </StyledImageTextSelectorItem>
      </StyledDivBasedRadioGroup>
    </>
  );
}
