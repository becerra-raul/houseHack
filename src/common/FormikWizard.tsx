import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { FormikDebug } from "./FormikDebug";
import { BigButton } from "./BigButton";
import styled from "styled-components";
import { maxMobileWidth } from "../style/sizes";
import { Backdrop, CircularProgress, Container, Snackbar } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { StyledDoubleButtonContainer } from "../seller-lead/CommonStyledFormElements";
import { SellerLeadPageBottomBar } from "../seller-lead/SellerLeadPageBottomBar";
import { useFunctions } from "reactfire";
import { useModalControls } from "./ModalUtils";
import { vibrantBlue } from "../style/colors";
import { Alert } from "@material-ui/lab";

interface MyProps {
  children: any;
  initialValues: any;
  stepNames: string[];
  onSubmit: (values: any, bag: any) => void;
  onEachStepSubmit?: (values: any, bag: any) => void;
  onStepChange?: (newStep: number, totalSteps: number) => void;
}

export const WizardStep = ({ children }: any) => children;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidth}px) {
    width: 100%;
  }
`;

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
export const FormikWizard = (props: MyProps) => {
  const { children, initialValues, onSubmit, stepNames } = props;
  const onEachStepSubmit = props.onEachStepSubmit || (() => {});
  const onStepChange = props.onStepChange || (() => {});
  const [spinnerModalIsOpen, spinnerModalOpen, spinnerModalClose] = useModalControls();
  const [snackbarIsOpen, snackbarOpen, snackbarClose] = useModalControls();

  const params: any = useParams();
  const formStepSlug: any = params.step;
  useEffect(() => {
    const formStepNumber = stepNumberFromName(formStepSlug, stepNames);
    setStepNumber(formStepNumber);
    onStepChange(formStepNumber, totalSteps);
  }, [formStepSlug]);

  const [stepNumber, setStepNumber] = useState(stepNumberFromName(formStepSlug, stepNames));
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step: any = steps[stepNumber];
  const totalSteps = steps.length - 1; // - 1 because the actual last step is the confirmation screen
  const isLastStep = stepNumber === totalSteps - 1;
  const isConfirmationScreen = stepNumber === totalSteps;

  const history = useHistory();
  const setStepNumberWithHistory = (newStep: number, totalSteps: number) => {
    const stepName = stepNameFromNumber(newStep, stepNames);
    history.push(`/seller-lead/${params.id}/${stepName}`);
    props.onStepChange && props.onStepChange(newStep, totalSteps);
  };

  const next = (values) => {
    setSnapshot(values);
    const newStep = Math.min(stepNumber + 1, totalSteps); //Don't subtract 1 because allow it to go to the confirmation screen
    setStepNumberWithHistory(newStep, totalSteps);
  };

  const previous = (values) => {
    setSnapshot(values);
    const newStep = Math.max(stepNumber - 1, 0);
    setStepNumberWithHistory(newStep, totalSteps);
  };

  const functions = useFunctions();
  async function submitLastStep() {
    const leadId = params.id;
    const hostname = window.location.hostname;
    const househackDidFinishForm = functions.httpsCallable("househackDidFinishForm");
    const finishFormResult = await househackDidFinishForm({ leadId, hostname });
    return finishFormResult;
  }

  const handleSubmit = async (values, bag) => {
    if (step.props.onStepSubmit) {
      await step.props.onStepSubmit(values, bag);
    }
    await onEachStepSubmit(values, bag);

    try {
      if (isLastStep) {
        spinnerModalOpen();
        await submitLastStep();
      }

      bag.setTouched({});
      next(values);
    } catch (error) {
      snackbarOpen();
    }
    spinnerModalClose();
  };

  const progress = stepNumber / totalSteps;
  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
      validateOnMount={true}
    >
      {(formik) => {
        return (
          <StyledForm>
            <div style={{ width: "100%" }}>{step}</div>
            <SellerLeadPageBottomBar
              progress={progress * 100}
              stepNumber={stepNumber}
              isLastStep={isLastStep}
              isStepValid={formik.isValid}
              isConfirmationScreen={isConfirmationScreen}
              onClickBack={previous}
            />

            <Backdrop open={spinnerModalIsOpen} style={{ zIndex: 999, color: vibrantBlue }}>
              <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={snackbarIsOpen} autoHideDuration={6000} onClose={snackbarClose}>
              <Alert onClose={snackbarClose} severity="error">
                Error submitting form. Please try again.
              </Alert>
            </Snackbar>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

function stepNumberFromName(stepName: string, stepNames: string[]): number {
  return Math.max(0, stepNames.indexOf(stepName));
}
function stepNameFromNumber(stepNumber: number, stepNames: string[]): string {
  return stepNames[stepNumber] || stepNames[0];
}
