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

import EditYearBuiltModal from "../modals/EditYearBuiltModal";
import { useModalControls } from "../../common/ModalUtils";
import EditBedroomsModal from "../modals/EditBedroomsModal";
import EditFullBathroomsModal from "../modals/EditFullBathroomsModal";
import EditPartialBathroomsModal from "../modals/EditPartialBathroomsModal";
import { WizardStep } from "../../common/FormikWizard";

interface MyProps {}

const BasicDataForm = (props: MyProps) => {
  const form: any = useFormikContext();

  const [bedroomsModalIsOpen, bedroomsModalOpen, bedroomsModalClose] = useModalControls();
  const [fullBathroomsModalIsOpen, fullBathroomsModalOpen, fullBathroomsModalClose] = useModalControls();
  const [partialBathroomsModalIsOpen, partialBathroomsModalOpen, partialBathroomsModalClose] = useModalControls();
  const [yearBuiltModalIsOpen, yearBuiltModalOpen, yearBuiltModalClose] = useModalControls();

  return (
    <>
      <StyledPageIntroContainer>
        <StyledQuestionTitle>Let's verify some facts about your property.</StyledQuestionTitle>
        <StyledQuestionSubtitle>
          This information is from publicly available data such as tax records and past MLS listings.
        </StyledQuestionSubtitle>
      </StyledPageIntroContainer>

      <SingleLineReviewInput labelText="Bedrooms" inputValue={form.values.bedrooms} onClickToEdit={bedroomsModalOpen} />
      <EditBedroomsModal open={bedroomsModalIsOpen} handleClose={bedroomsModalClose} />

      <SingleLineReviewInput
        labelText="Full Bathrooms"
        inputValue={form.values.fullBathrooms}
        onClickToEdit={fullBathroomsModalOpen}
      />
      <EditFullBathroomsModal open={fullBathroomsModalIsOpen} handleClose={fullBathroomsModalClose} />

      <SingleLineReviewInput
        labelText="Partial Bathrooms"
        inputValue={form.values.partialBathrooms}
        onClickToEdit={partialBathroomsModalOpen}
      />
      <EditPartialBathroomsModal open={partialBathroomsModalIsOpen} handleClose={partialBathroomsModalClose} />

      <SingleLineReviewInput
        labelText="Year Built"
        inputValue={form.values.yearBuilt}
        onClickToEdit={yearBuiltModalOpen}
      />
      <EditYearBuiltModal open={yearBuiltModalIsOpen} handleClose={yearBuiltModalClose} />
    </>
  );
};

export default BasicDataForm;
