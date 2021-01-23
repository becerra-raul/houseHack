import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import styled from "styled-components";
import { backgroundBlue, mainTextColor, mediumDarknessTextColor } from "../../style/colors";
import { maxMobileWidth } from "../../style/sizes";
import * as Icons from "@material-ui/icons";
import { BigButton, ExpandingBigButton, ExpandingSecondaryBigButton } from "../../common/BigButton";
import SingleLineReviewInput from "../SingleLineReviewInput";
import { StyledDoubleButtonContainer, StyledQuestionTitle } from "../CommonStyledFormElements";
import { Field, useFormikContext } from "formik";
import * as FormikMui from "formik-material-ui";
import { title } from "process";
import NumberEditor from "./NumberEditor";
import { useIsMobileWidth } from "../../common/CommonUtils";
import { StyledDialog, StyledDialogContainer, StyledDialogActions } from "./ModalStyles";
import { ReactComponent as SaveProgressSVG } from "../../images/save_progress.svg";

interface MyProps {
  onCancel: () => void;
  onSave: () => void;
  isSaveEnabled?: boolean;
}

export default function ModalCancelAndSaveButtons(props: MyProps) {
  const { onCancel, onSave } = props;
  const isSaveEnabled = props.isSaveEnabled == null ? true : props.isSaveEnabled;

  return (
    <StyledDoubleButtonContainer style={{ margin: "1em 0" }}>
      <ExpandingSecondaryBigButton onClick={onCancel}>Cancel</ExpandingSecondaryBigButton>
      <ExpandingBigButton variant="contained" color="primary" onClick={onSave} disabled={!isSaveEnabled}>
        Save
      </ExpandingBigButton>
    </StyledDoubleButtonContainer>
  );
}
