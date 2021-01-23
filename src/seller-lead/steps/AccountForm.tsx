import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledFieldEditBox,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
  StyledTextfieldContainer,
  StyledTextfieldLabel,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import { ReactComponent as RouteSVG } from "../../images/route.svg";

const StyledRouteSVG = styled(RouteSVG)`
  margin: 100px 0 55px;
  max-width: 100%;

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin: 30px 0 25px;
  }
`;

interface MyProps {}

const AccountForm = (props: MyProps) => {
  return (
    <>
      <StyledPageIntroContainer>
        {/* <StyledRouteSVG /> */}
        <StyledQuestionTitle>You're almost done!</StyledQuestionTitle>
        <StyledQuestionSubtitle>Enter your contact info and we'll send you your offer.</StyledQuestionSubtitle>
      </StyledPageIntroContainer>
      <StyledTextfieldContainer>
        <StyledTextfieldLabel>Full name</StyledTextfieldLabel>
        <StyledFieldEditBox name="accountFullName" placeholder="John Doe" />
      </StyledTextfieldContainer>

      <StyledTextfieldContainer>
        <StyledTextfieldLabel>Email address</StyledTextfieldLabel>
        <StyledFieldEditBox name="accountEmail" placeholder="you@example.com" />
      </StyledTextfieldContainer>

      <StyledTextfieldContainer>
        <StyledTextfieldLabel>Phone number (optional)</StyledTextfieldLabel>
        <StyledFieldEditBox name="accountPhoneNumber" placeholder="(805) 123-4567" />
      </StyledTextfieldContainer>
    </>
  );
};

export default AccountForm;
