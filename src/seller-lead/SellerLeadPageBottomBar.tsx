import { Link } from "@material-ui/core";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import styled from "styled-components";
import { BigButton, SecondaryBigButton } from "../common/BigButton";
import { househackMarketingSiteURL } from "../common/Constants";

import { StyledProgressBar } from "../common/ProgressBar";
import logo from "../images/logo.png";
import { backgroundBlue, fadedBlue, vibrantBlue } from "../style/colors";
import { leftSidebarWidth, maxMobileWidth, maxWidthWithoutGutters } from "../style/sizes";
import { StyledDoubleButtonContainer } from "./CommonStyledFormElements";
import { SaveProgressButton } from "./SaveProgressButton";

interface MyProps {
  progress: number;
  stepNumber: number;
  isLastStep: boolean;
  isStepValid: boolean;
  isConfirmationScreen: boolean;
  onClickBack: (values: any) => void;
}

const StyledBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 105px;
  width: 100%;
  background-color: ${backgroundBlue};

  @media screen and (min-width: ${maxMobileWidth + 1}px) and (max-width: ${maxWidthWithoutGutters}px) {
    left: ${leftSidebarWidth}px;
    width: calc(100vw - ${leftSidebarWidth}px);
  }

  @media screen and (min-width: ${maxWidthWithoutGutters + 1}px) {
    left: calc((100vw - ${maxWidthWithoutGutters}px) * 0.5 + ${leftSidebarWidth}px);
    width: calc(${maxWidthWithoutGutters}px - ${leftSidebarWidth}px);
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  padding: 19px 20px 0;
  justify-content: flex-end;

  > :first-child {
    margin-right: 20px;
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    justify-content: space-between;

    &[data-is-single-button="true"] {
      button {
        flex: 1;
        margin: 0;
      }
    }
  }
`;

const StyledContainerBelowProgress = styled.div`
  @media screen and (max-width: ${maxMobileWidth}px) {
    a {
      display: none;
    }
  }
  @media screen and (min-width: ${maxMobileWidth + 1}px) {
    display: flex;
    justify-content: space-between;
    margin: 0 15px 0 20px;
    a {
      line-height: 60px;
      margin: 19px 20px 0;
    }
  }
`;

const StyledBackToWebsiteButton = styled(BigButton)`
  width: 250px;
`;

export function SellerLeadPageBottomBar(props: MyProps) {
  const { stepNumber, isLastStep, onClickBack, isConfirmationScreen, isStepValid } = props;

  const formik = useFormikContext();
  const clickedSaveProgress = (event: React.MouseEvent) => {
    event.preventDefault();
    alert("TODO: Have a modal pop up");
  };

  useEffect(() => {
    formik.validateForm();
    setTimeout(() => formik.validateForm(), 100); //Horrible hacks
    setTimeout(() => formik.validateForm(), 500); //Horrible hacks
  }, [stepNumber]); //This doesn't make any sense here but oh well it's easy

  return (
    <StyledBottomContainer>
      <StyledProgressBar variant="determinate" value={props.progress} />
      {isConfirmationScreen && (
        <StyledButtonContainer data-is-single-button={true}>
          <StyledBackToWebsiteButton
            variant="contained"
            color="primary"
            onClick={() => {
              document.location.href = househackMarketingSiteURL;
            }}
          >
            Back to website
          </StyledBackToWebsiteButton>
        </StyledButtonContainer>
      )}
      {!isConfirmationScreen && (
        <StyledContainerBelowProgress>
          <SaveProgressButton />
          <StyledButtonContainer data-is-single-button={stepNumber == 0}>
            {stepNumber > 0 && (
              <SecondaryBigButton
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
                disableElevation={true}
                onClick={() => onClickBack(formik.values)}
              >
                Back
              </SecondaryBigButton>
            )}
            <BigButton
              variant="contained"
              color="primary"
              disabled={!isStepValid || formik.isSubmitting}
              onClick={() => {
                formik.submitForm(); //TODO: why does this wreck the animation?
              }}
            >
              {isLastStep ? "Submit" : "Continue"}
            </BigButton>
          </StyledButtonContainer>
        </StyledContainerBelowProgress>
      )}
    </StyledBottomContainer>
  );
}
