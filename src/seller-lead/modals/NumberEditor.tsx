import { Button } from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { componentPrimaryColor, fadedBlue, mainTextColor, vibrantBlue } from "../../style/colors";
import {
  StyledEditFieldBoxCommon,
  StyledFieldEditBox,
  StyledPageIntroContainer,
  StyledQuestionTitle,
  StyledTextfieldContainer,
  StyledTextfieldLabel,
} from "../CommonStyledFormElements";
import * as Icons from "@material-ui/icons";
import * as FormikMui from "formik-material-ui";

interface MyProps {
  formikField: string;
  fieldLabel: string;
  largeNumber: boolean;
}

const StyledContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  margin: 0 -10px;
`;

const StyledEditorContainer = styled.div`
  white-space: nowrap;
  text-align: center;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const StyledCircleButton = styled(Button)`
  border-radius: 1000px;
  border: 3px solid ${fadedBlue};
  padding: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  min-width: 0;

  .MuiSvgIcon-root {
    color: ${vibrantBlue};
  }
  &.MuiButton-containedPrimary:hover {
    // background-color: #fff;
  }
`;

const StyledFieldDisplayBox = styled.span`
  ${StyledEditFieldBoxCommon}

  display: inline-block;
  width: 140px;
  margin: 0 15px;
`;

export default function NumberEditor(props: MyProps) {
  const { formikField, fieldLabel, largeNumber } = props;
  const form: any = useFormikContext();
  const currentFormValue = form.values[formikField];

  const decrement = function () {
    form.setFieldValue(formikField, currentFormValue - 1);
  };
  const increment = function () {
    form.setFieldValue(formikField, currentFormValue + 1);
  };

  return (
    <StyledContainer>
      <StyledTitle>{fieldLabel}</StyledTitle>
      {largeNumber && <StyledFieldEditBox name={formikField} type={"number"} style={{ textAlign: "center" }} />}
      {!largeNumber && (
        <StyledEditorContainer>
          <StyledCircleButton onClick={decrement} disabled={currentFormValue == 0}>
            <Icons.RemoveRounded />
          </StyledCircleButton>
          <StyledFieldDisplayBox>{currentFormValue}</StyledFieldDisplayBox>
          <StyledCircleButton onClick={increment}>
            <Icons.AddRounded />
          </StyledCircleButton>
        </StyledEditorContainer>
      )}
    </StyledContainer>
  );
}
