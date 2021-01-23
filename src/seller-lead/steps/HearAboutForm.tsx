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

const HearAboutForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>How did you first hear about HouseHack?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <Field component={FormikMui.RadioGroup} name="hearAbout">
        <StyledFormControlLabel value={"word_of_mouth"} control={<StyledRadio />} label="Word of mouth" />
        <StyledFormControlLabel value={"radio"} control={<StyledRadio />} label="Radio" />
        <StyledFormControlLabel value={"online_ad"} control={<StyledRadio />} label="Online ad" />
        <StyledFormControlLabel value={"internet_search"} control={<StyledRadio />} label="Internet Search" />
        <StyledFormControlLabel value={"youtube"} control={<StyledRadio />} label="YouTube" />
        <StyledFormControlLabel value={"other"} control={<StyledRadio />} label="Other" />
      </Field>
    </>
  );
};

export default HearAboutForm;
