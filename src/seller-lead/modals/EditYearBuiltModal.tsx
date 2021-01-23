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

interface MyProps {
  open: boolean;
  handleClose: () => void;
}

const EditYearBuiltModal = (props: MyProps) => {
  const { open, handleClose } = props;
  return (
    <EditFieldModal
      open={open}
      handleClose={handleClose}
      formikField="yearBuilt"
      fieldLabel="Year Built"
      title="Please confirm the year built below."
      largeNumber={true}
    >
      {" "}
    </EditFieldModal>
  );
};

export default EditYearBuiltModal;
