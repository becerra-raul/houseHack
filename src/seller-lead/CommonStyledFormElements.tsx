import { Button, Checkbox, CheckboxProps, FormControlLabel, Radio, Typography } from "@material-ui/core";
import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import DivBasedRadioGroup from "../common/DivBasedRadioGroup";
import { componentPrimaryColor, fadedBlue, mainTextColor, subtitleTextColor, vibrantBlue } from "../style/colors";
import { maxMobileWidth, maxWidthForVerticalLayout, maxWidthWithoutGutters, minDesktopWidth } from "../style/sizes";
import CheckboxCheckSVG from "../images/checkbox-check.svg";

export const DashedUnderline = styled.u`
  text-decoration: none;
  border-bottom: 1px dashed #66d3fb;
`;

export const StyledQuestionTitle = styled(Typography)`
  /* h3 - Header 3 - 32pt Futura pt Bold */
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;

  text-transform: capitalize;

  color: ${mainTextColor};

  @media screen and (max-width: ${maxMobileWidth}px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const StyledQuestionSubtitle = styled(Typography)`
  margin-top: 15px;
  color: ${subtitleTextColor};
  font-size: 20px;
  line-height: 26px;

  @media screen and (max-width: ${maxMobileWidth}px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const StyledModalTitle = styled(StyledQuestionTitle)`
  text-align: center;
`;

export const StyledPageIntroContainer = styled.div`
  padding-bottom: 40px;

  @media screen and (max-width: ${maxMobileWidth}px) {
    padding-bottom: 20px;
  }
`;

export const StyledNumberButtonContainer = styled.div`
  > * {
    margin: 0 16px 0 0;
  }

  > *:last-child {
    margin: 0;
  }
`;

export const StyledSubquestionContainer = styled.div`
  margin: 24px 0px 24px 30px;
`;

export const StyledSubtextfieldContainer = styled(StyledSubquestionContainer)`
  max-width: 300px;
`;

export const StyledSubquestionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1.5em;
`;

export const StyledNumberButton = styled(Button)`
  border-radius: 1000px;
  padding: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  min-width: 0;

  &.MuiButton-containedPrimary:hover {
    background-color: ${componentPrimaryColor};
  }
`;

export const StyledDoubleButtonContainer = styled.div`
  display: flex;
  margin: 45px 0;
  width: 100%;

  > :first-child {
    margin-right: 10px;
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    justify-content: space-between;
  }
`;

export const StyledDivBasedRadioGroup = styled(DivBasedRadioGroup)`
  display: flex;

  [data-value] {
    margin-right: 40px;
  }

  @media screen and (max-width: ${maxWidthForVerticalLayout}px) {
    flex-direction: column;

    [data-value] {
      margin: 10px 0;
    }
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    [data-value] {
      margin: 10px;
    }
  }

  @media screen and (min-width: ${maxWidthForVerticalLayout + 1}px) {
    [data-value]:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledImageTextSelectorItem = styled.div`
  height: 275px;

  border: 3px solid ${fadedBlue};
  box-sizing: border-box;
  box-shadow: 0px 4px 9px #e0f6fd;
  border-radius: 10px;

  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  /* or 28px */
  text-align: center;
  color: ${mainTextColor};

  &[data-is-selected="true"],
  [data-is-selected="true"] & {
    background: white;
    border: 3px solid ${vibrantBlue};
    box-sizing: border-box;
    box-shadow: 0px 8px 26px ${fadedBlue};
    border-radius: 10px;
    color: ${vibrantBlue};

    svg path {
      fill: ${vibrantBlue};
    }
  }

  transition: all 0.5s ease;
  svg path {
    fill: ${fadedBlue};
    transition: fill 0.5s ease;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  svg {
    margin: 65px 0 30px;
  }
  @media screen and (max-width: ${maxWidthForVerticalLayout}px) {
    svg {
      margin: 0 20px 0 0;
    }

    text-align: left;
    height: 142px;

    flex-direction: row;
    margin: 10px 0;
  }

  @media screen and (min-width: ${maxWidthForVerticalLayout + 1}px) {
    width: 220px;
  }
`;

export const StyledTextOnlySelectorItem = styled(StyledImageTextSelectorItem)`
  justify-content: center;

  @media screen and (min-width: ${maxWidthForVerticalLayout + 1}px) {
    flex-grow: 1;
    max-width: 215px;
    height: 100px;
  }
`;

export const StyledTextfieldContainer = styled.div`
  max-width: 450px;
  margin-bottom: 30px;

  > * {
    width: 100%;
  }
`;

export const StyledTextfieldLabel = styled.div`
  color: ${subtitleTextColor};
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 3px;

  @media screen and (max-width: ${maxMobileWidth}px) {
    text-align: center;
  }

  @media screen and (min-width: ${minDesktopWidth}px) {
    margin-left: 30px;
  }
`;

export const StyledEditFieldBoxCommon = `
  color: ${mainTextColor};
  border-radius: 1000px;
  border: 2px solid ${fadedBlue};
  padding: 0;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  vertical-align: middle;
  -moz-appearance: textfield;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const styledEditBoxCommonComplete = `
  ${StyledEditFieldBoxCommon}
  width: calc(100% - 10px);
  margin: 5px;
  box-sizing: border-box;
  text-align: left;
  padding: 0 28px;

  @media screen and (max-width: ${maxMobileWidth}px) {
    text-align: center;
  }

  ::placeholder {
    color: ${fadedBlue};
  }
`;

export const StyledSimpleInputEditBox = styled.input`
  ${styledEditBoxCommonComplete}
`;

export const StyledFieldEditBox = styled(Field)`
  ${styledEditBoxCommonComplete}
`;

export const StyledInputBubbleContainer = styled.div`
  position: relative;
  margin-top: 7px;

  @media screen and (max-width: ${maxWidthForVerticalLayout}px) {
    margin-top: 5px; //So the absolute triangle is within bounds
    text-align: center;
  }

  &:before {
    content: "";
    top: -3px;
    position: absolute;
    left: calc(50% - 10px);
    transform: rotate(45deg);
    background: white;
    border: 1px solid ${fadedBlue};
    height: 15px;
    width: 15px;
    display: block;
  }

  &:after {
    content: "";
    top: -2px;
    z-index: 2;
    position: absolute;
    left: calc(50% - 9px);
    transform: rotate(45deg);
    background: white;
    height: 15px;
    width: 15px;
    display: block;
  }
`;
export const StyledInputBubble = styled(Field)`
  ${styledEditBoxCommonComplete}
  border: 1px solid ${fadedBlue};
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  padding: 0;

  @media screen and (max-width: ${maxWidthForVerticalLayout}px) {
    margin-top: 5px; //So the absolute triangle is within bounds
    text-align: center;
    width: 70%;
    max-width: 280px;
  }

  :focus {
    //Looks weird with the speech triangle otherwise
    outline: none;
    box-shadow: none;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 0 0 15px 0;
  .MuiFormControlLabel-label {
    font-weight: 500;
    font-size: 28px;
    line-height: 110%;
    margin-left: 15px;
  }

  .Mui-checked + * {
    color: ${vibrantBlue};
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin: 0 0 20px 0;
  }
`;

const PrivateStyledCheckbox = styled(Checkbox)`
  background: white;
  border: 2px solid ${fadedBlue};
  box-sizing: border-box;
  border-radius: 5px;
  width: 20px;
  height: 20px;

  &.Mui-checked {
    border: 2px solid ${vibrantBlue};
    box-shadow: 0px 4px 16px ${fadedBlue};
  }

  &:hover {
    background-color: white;
  }

  .checkbox-icon-checked::before {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${CheckboxCheckSVG});
    background-size: 10px 10px;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
  }
`;

export function StyledCheckbox(props: CheckboxProps) {
  return (
    <PrivateStyledCheckbox
      disableRipple
      color="default"
      checkedIcon={<span className="checkbox-icon-checked" />}
      icon={<span className="checkbox-icon-unchecked" />}
      {...props}
    />
  );
}

export const StyledRadio = styled(Radio)`
  color: ${fadedBlue};

  & + .MuiFormControlLabel-label {
    margin-left: 5px;
  }

  .MuiIconButton-label::before {
    display: block;
    width: 18px;
    height: 18px;
    background: white;
    content: "";
    position: absolute;
  }

  &.Mui-checked {
    color: ${vibrantBlue};
    // box-shadow: 0px 4px 16px ${fadedBlue};
  }
`;
