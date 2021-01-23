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
import { StyledDoubleButtonContainer, StyledModalTitle, StyledQuestionTitle } from "../CommonStyledFormElements";
import { Field, useFormikContext } from "formik";
import * as FormikMui from "formik-material-ui";
import { title } from "process";
import NumberEditor from "./NumberEditor";
import { useIsMobileWidth } from "../../common/CommonUtils";
import { StyledDialog, StyledDialogContainer, StyledDialogActions } from "./ModalStyles";
import ModalCancelAndSaveButtons from "./ModalCancelAndSaveButtons";

interface MyProps {
  children: any;
  open: boolean;
  handleClose: () => void;
  formikField: string;
  fieldType?: string;
  fieldLabel: string;
  title: string;
  largeNumber?: boolean;
}

export default function EditFieldModal(props: MyProps) {
  const { open, handleClose, formikField, title, fieldLabel } = props;
  const largeNumber = props.largeNumber || false;
  const form: any = useFormikContext();
  const [originalFieldValue, setOriginalFieldValue] = useState();
  const fullScreen = useIsMobileWidth();

  useEffect(() => {
    setOriginalFieldValue(form.values[formikField]);
  }, [open]);

  const onCancel = () => {
    form.setFieldValue(formikField, originalFieldValue);
    handleClose();
  };

  const onSave = () => {
    handleClose();
  };

  return (
    <StyledDialog open={open} onClose={onCancel} fullScreen={fullScreen}>
      <StyledDialogContainer>
        <StyledModalTitle>{title}</StyledModalTitle>
        <br />
        <DialogContent>
          {props.children}
          <br />
          <NumberEditor formikField={formikField} fieldLabel={fieldLabel} largeNumber={largeNumber} />
        </DialogContent>
        <StyledDialogActions>
          <ModalCancelAndSaveButtons onCancel={onCancel} onSave={onSave} />
        </StyledDialogActions>
      </StyledDialogContainer>
    </StyledDialog>
  );
}
