import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Hidden,
  TextField,
  Typography,
  Radio,
  DialogContentText,
} from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";
import {
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

import { ReactComponent as CircleCheck } from "../../images/circlecheck.svg";
import { ReactComponent as CircleX } from "../../images/circlex.svg";
import EditFieldModal from "./EditFieldModal";
import { StyledDialogColumnContainer, StyledDialogColumnChild, StyledGoodList, StyledBadList } from "./ModalStyles";

interface MyProps {
  open: boolean;
  handleClose: () => void;
}

export default function EditSquareFeetModal(props: MyProps) {
  const { open, handleClose } = props;
  return (
    <EditFieldModal
      open={open}
      handleClose={handleClose}
      formikField="squareFeet"
      fieldLabel="Square Feet"
      title="Please confirm your above grade living area square footage."
      largeNumber={true}
    >
      <StyledDialogColumnContainer>
        <StyledDialogColumnChild>
          <DialogContentText>Include spaces that are:</DialogContentText>
          <StyledGoodList>
            <DialogContentText>
              <CircleCheck /> Fully enclosed
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Heated, cooled, and insulated
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Floor level is entirely above ground
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Permitted by the city or county
            </DialogContentText>
          </StyledGoodList>
        </StyledDialogColumnChild>
        <StyledDialogColumnChild>
          <DialogContentText>Please do not include:</DialogContentText>
          <StyledBadList>
            <DialogContentText>
              <CircleX /> Basement
            </DialogContentText>
            <DialogContentText>
              <CircleX /> Garage
            </DialogContentText>
            <DialogContentText>
              <CircleX /> Screened porch
            </DialogContentText>
          </StyledBadList>
        </StyledDialogColumnChild>
      </StyledDialogColumnContainer>
    </EditFieldModal>
  );
}
