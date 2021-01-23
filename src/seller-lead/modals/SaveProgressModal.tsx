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
import {
  StyledDoubleButtonContainer,
  StyledFieldEditBox,
  StyledModalTitle,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
  StyledSimpleInputEditBox,
  StyledTextfieldContainer,
  StyledTextfieldLabel,
} from "../CommonStyledFormElements";
import { Field, useFormikContext } from "formik";
import * as FormikMui from "formik-material-ui";
import { title } from "process";
import NumberEditor from "./NumberEditor";
import { useIsMobileWidth } from "../../common/CommonUtils";
import { StyledDialog, StyledDialogContainer, StyledDialogActions } from "./ModalStyles";
import { ReactComponent as SaveProgressSVG } from "../../images/save_progress.svg";
import ModalCancelAndSaveButtons from "./ModalCancelAndSaveButtons";
import { useParams } from "react-router-dom";
import { useFunctions } from "reactfire";

interface MyProps {
  open: boolean;
  handleClose: () => void;
}

export default function SaveProgressModal(props: MyProps) {
  const { open, handleClose } = props;
  const [email, setEmail] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
    setFormIsValid(/.+@.+/.test(event.target.value));
  };

  const fullScreen = useIsMobileWidth();
  const params: any = useParams();
  const functions = useFunctions();

  const onCancel = () => {
    handleClose();
  };

  const onSave = async () => {
    const leadId = params.id;
    const househackDidSaveProgress = functions.httpsCallable("househackDidSaveProgress");
    handleClose();
    const househackDidSaveProgressResult = await househackDidSaveProgress({ leadId, email });
    console.log(`househackDidSaveProgress: ${househackDidSaveProgressResult}`);

    return househackDidSaveProgressResult;
  };

  return (
    <StyledDialog open={open} onClose={onCancel} fullScreen={fullScreen}>
      <StyledDialogContainer style={{ textAlign: "center" }}>
        <SaveProgressSVG />
        <StyledModalTitle>Save Your Progress</StyledModalTitle>
        <DialogContent>
          <StyledQuestionSubtitle style={{ marginTop: 0 }}>
            Enter your email and we'll send you a link that lets you continue anytime where you left off.
          </StyledQuestionSubtitle>
          <StyledTextfieldContainer>
            <StyledTextfieldLabel style={{ margin: "20px 0 0" }}>Your Email Address</StyledTextfieldLabel>
            <StyledSimpleInputEditBox
              value={email}
              onChange={handleChange}
              type={"email"}
              style={{ textAlign: "center" }}
              placeholder="example@email.com"
            />
          </StyledTextfieldContainer>
        </DialogContent>
        <StyledDialogActions>
          <ModalCancelAndSaveButtons onCancel={onCancel} onSave={onSave} isSaveEnabled={formIsValid} />
        </StyledDialogActions>
      </StyledDialogContainer>
    </StyledDialog>
  );
}
