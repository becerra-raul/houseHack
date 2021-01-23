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

const SaleTimelineForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>What's your sale timeline?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <Field component={FormikMui.RadioGroup} name="saleTimeline">
        <StyledFormControlLabel value={"asap"} control={<StyledRadio />} label="ASAP" />
        <StyledFormControlLabel value={"two_four_weeks"} control={<StyledRadio />} label="2 - 4 weeks" />
        <StyledFormControlLabel value={"four_six_weeks"} control={<StyledRadio />} label="4 - 6 weeks" />
        <StyledFormControlLabel value={"over_six_weeks"} control={<StyledRadio />} label="6+ weeks" />
        <StyledFormControlLabel value={"just_browsing"} control={<StyledRadio />} label="Just browsing" />
      </Field>
    </>
  );
};

export default SaleTimelineForm;
