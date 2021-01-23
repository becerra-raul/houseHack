import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Hidden,
  TextField,
  Typography,
  Radio,
  Collapse,
} from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, mainTextColor, mediumDarknessTextColor, vibrantBlue } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledDivBasedRadioGroup,
  StyledImageTextSelectorItem,
  StyledInputBubble,
  StyledInputBubbleContainer,
  StyledPageIntroContainer,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import DivBasedRadioGroup from "../../common/DivBasedRadioGroup";
import { ReactComponent as KeysSVG } from "../../images/keys.svg";
import { ReactComponent as ManSVG } from "../../images/man.svg";
import { ReactComponent as RealtorSVG } from "../../images/realtor.svg";

//
interface MyProps {}

const RelationshipForm = (props: MyProps) => {
  const form: any = useFormikContext();
  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>What is your relationship to this property?</StyledQuestionTitle>
      </StyledPageIntroContainer>

      <StyledDivBasedRadioGroup name="relationship">
        <StyledImageTextSelectorItem data-value="owner">
          <KeysSVG />
          <div>
            I’m the <br className="vertical-layout-hidden" />
            Owner
          </div>
        </StyledImageTextSelectorItem>
        <StyledImageTextSelectorItem data-value="agent">
          <RealtorSVG />
          <div>
            I’m a Realtor <br className="vertical-layout-hidden" />
            or Agent
          </div>
        </StyledImageTextSelectorItem>
        <div data-value="other">
          <StyledImageTextSelectorItem>
            <ManSVG />
            <div>Other</div>
          </StyledImageTextSelectorItem>
          <Collapse in={form.values.relationship == "other" && false} style={{ textAlign: "center" }}>
            <StyledInputBubbleContainer>
              <StyledInputBubble placeholder="Please Describe" name="relationshipOtherText" />
            </StyledInputBubbleContainer>
          </Collapse>
        </div>
      </StyledDivBasedRadioGroup>
    </>
  );
};

export default RelationshipForm;
