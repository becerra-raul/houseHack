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
  StyledQuestionTitle,
  StyledRadio,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";

interface MyProps {}

const PoolForm = (props: MyProps) => {
  //poolType: null, //in_ground, above_ground, community, none
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Does your property have a pool?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <Field component={FormikMui.RadioGroup} name="poolType">
        <StyledFormControlLabel value={"in_ground"} control={<StyledRadio />} label="Yes, in-ground" />
        <StyledFormControlLabel value={"above_ground"} control={<StyledRadio />} label="Yes, above-ground" />
        <StyledFormControlLabel value={"community"} control={<StyledRadio />} label="Community pool" />
        <StyledFormControlLabel value={"none"} control={<StyledRadio />} label="No pool" />
      </Field>
    </>
  );
};

export default PoolForm;
