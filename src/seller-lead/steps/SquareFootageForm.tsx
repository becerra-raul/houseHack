import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography, Radio } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
  StyledNumberButton,
  StyledNumberButtonContainer,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSubquestionContainer,
  StyledSubquestionTitle,
  StyledSubtextfieldContainer,
} from "../CommonStyledFormElements";
import * as FormikMui from "formik-material-ui";
import { onChangeForCheckboxesWithNoneOfTheAbove } from "../../common/FormUtils";
import SingleLineReviewInput from "../SingleLineReviewInput";
import FormikButtonBasedRadioGroupField from "../../common/FormikButtonBasedRadioGroupField";
import { useModalControls } from "../../common/ModalUtils";
import EditSquareFeetModal from "../modals/EditSquareFeetModal";

interface MyProps {}

const SquareFootageForm = (props: MyProps) => {
  const form: any = useFormikContext();
  const [squareFeetModalIsOpen, squareFeetModalOpen, squareFeetModalClose] = useModalControls();

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Please confirm the square footage of your property.</StyledQuestionTitle>
        <StyledQuestionSubtitle>
          This information is from publicly available data such as tax records and past MLS listings.
        </StyledQuestionSubtitle>
      </StyledPageIntroContainer>
      <SingleLineReviewInput
        labelText="Above grade ft²"
        inputValue={form.values.squareFeet}
        onClickToEdit={squareFeetModalOpen}
      />
      <EditSquareFeetModal open={squareFeetModalIsOpen} handleClose={squareFeetModalClose} />
    </>
  );
};

export default SquareFootageForm;
