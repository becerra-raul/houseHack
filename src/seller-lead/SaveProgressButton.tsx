import React, { useState } from "react";
import { Link, Typography } from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, mainTextColor, mediumDarknessTextColor, vibrantBlue } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";
import * as Icons from "@material-ui/icons";
import { DashedUnderline } from "./CommonStyledFormElements";
import { ReactComponent as SaveIconSVG } from "../images/small_save_icon.svg";
import { useModalControls } from "../common/ModalUtils";
import SaveProgressModal from "./modals/SaveProgressModal";

interface MyProps {}

const StyledSaveProgress = styled(Link)`
  font-family: Futura PT;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 0px;
  /* identical to box height, or 0% */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${vibrantBlue};
  white-space: nowrap;

  svg {
    vertical-align: text-top;
    margin-right: 5px;
  }
`;

export function SaveProgressButton(props: MyProps) {
  const [modalIsOpen, modalOpen, modalClose] = useModalControls();

  return (
    <>
      <StyledSaveProgress href="#" onClick={modalOpen}>
        <SaveIconSVG />
        Save Progress
      </StyledSaveProgress>
      <SaveProgressModal open={modalIsOpen} handleClose={modalClose} />
    </>
  );
}
