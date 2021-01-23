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

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${backgroundBlue};
  }
`;

export const StyledDialogContainer = styled.div`
  padding: 3em;

  @media screen and (min-width: ${maxMobileWidth + 1}px) {
    width: 500px;
    max-width: 500px;
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    padding: 50px 1em 1em;
  }
`;

export const StyledDialogActions = styled(DialogActions)`
  margin-top: 2em;

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin-top: 1em;
  }
`;

export const StyledDialogColumnContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${maxMobileWidth}px) {
    flex-direction: column;
  }
`;

export const StyledDialogColumnChild = styled.div`
  flex: 1;

  @media screen and (min-width: ${maxMobileWidth + 1}px) {
    :first-child {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin-bottom: 20px;
  }

  .MuiDialogContentText-root {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    color: ${mainTextColor};
  }
`;

const StyledListCommon = `
  .MuiDialogContentText-root {
    font-weight: 500;
    font-size: 20px;
    color: ${mainTextColor};
    margin: 0;
  }

  svg {
    margin-bottom: -4px;
    margin-right: 3px;
  }
`;

export const StyledGoodList = styled.div`
  ${StyledListCommon}
`;
export const StyledBadList = styled.div`
  ${StyledListCommon}
`;
