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

const CountertopsForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>What kind of countertops does your kitchen have?</StyledQuestionTitle>
      </StyledPageIntroContainer>
      <Field component={FormikMui.RadioGroup} name="kitchenCounterType">
        <StyledFormControlLabel value={"laminate"} control={<StyledRadio />} label="Laminate / Formica" />
        <StyledFormControlLabel value={"corian"} control={<StyledRadio />} label="Corian" />
        <StyledFormControlLabel
          value={"solid_stone"}
          control={<StyledRadio />}
          label="Solid natural stone slab (granite, quartz, marble)"
        />
        <StyledFormControlLabel value={"granite_tile"} control={<StyledRadio />} label="Granite tile" />
        <StyledFormControlLabel value={"other_tile"} control={<StyledRadio />} label="Other tile" />
        <StyledFormControlLabel value={"other"} control={<StyledRadio />} label="Other" />
      </Field>
      <br />
      <br />
      <br />
    </>
  );
};

export default CountertopsForm;
