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

export default function EditBedroomsModal(props: MyProps) {
  const { open, handleClose } = props;
  return (
    <EditFieldModal
      open={open}
      handleClose={handleClose}
      formikField="bedrooms"
      fieldLabel="Bedrooms"
      title="Please confirm the number of bedrooms below."
    >
      <StyledDialogColumnContainer>
        <StyledDialogColumnChild>
          <DialogContentText>Bedrooms must have:</DialogContentText>
          <StyledGoodList>
            <DialogContentText>
              <CircleCheck /> Four walls
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Door
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Closet
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Exterior window
            </DialogContentText>
          </StyledGoodList>
        </StyledDialogColumnChild>
        <StyledDialogColumnChild>
          <DialogContentText>Please do not include:</DialogContentText>
          <StyledBadList>
            <DialogContentText>
              <CircleX /> Den
            </DialogContentText>
            <DialogContentText>
              <CircleX /> Office
            </DialogContentText>
          </StyledBadList>
        </StyledDialogColumnChild>
      </StyledDialogColumnContainer>
    </EditFieldModal>
  );
}
