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
import { StyledDialogColumnContainer, StyledDialogColumnChild, StyledGoodList } from "./ModalStyles";

interface MyProps {
  open: boolean;
  handleClose: () => void;
}

export default function EditFullBathroomsModal(props: MyProps) {
  const { open, handleClose } = props;
  return (
    <EditFieldModal
      open={open}
      handleClose={handleClose}
      formikField="fullBathrooms"
      fieldLabel="Full Bathrooms"
      title="Please confirm the number of full bathrooms below."
    >
      <StyledDialogColumnContainer>
        <StyledDialogColumnChild>
          <DialogContentText>Full baths must have:</DialogContentText>
          <StyledGoodList>
            <DialogContentText>
              <CircleCheck /> Sink
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Toilet
            </DialogContentText>
            <DialogContentText>
              <CircleCheck /> Shower / Tub
            </DialogContentText>
          </StyledGoodList>
        </StyledDialogColumnChild>
      </StyledDialogColumnContainer>
    </EditFieldModal>
  );
}
