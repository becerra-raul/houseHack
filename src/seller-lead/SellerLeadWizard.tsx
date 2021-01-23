import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikWizard, WizardStep } from "../common/FormikWizard";
import { Button, Checkbox, Fab, FormControlLabel, FormGroup, Radio, Typography } from "@material-ui/core";
import styled from "styled-components";
import * as FormikMui from "formik-material-ui";
import { componentPrimaryColor, mediumDarknessTextColor, subtitleTextColor } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";
import * as Icons from "@material-ui/icons";
import SingleLineReviewInput from "./SingleLineReviewInput";
import FormikButtonBasedRadioGroupField from "../common/FormikButtonBasedRadioGroupField";
import CoveredParkingForm from "./steps/CoveredParkingForm";
import {
  StyledNumberButton,
  StyledNumberButtonContainer,
  StyledPageIntroContainer,
  StyledQuestionSubtitle,
  StyledQuestionTitle,
} from "./CommonStyledFormElements";
import HOAForm from "./steps/HOAForm";
import CriteriaForm from "./steps/CriteriaForm";
import SolarForm from "./steps/SolarForm";
import PaintForm from "./steps/PaintForm";
import RelationshipForm from "./steps/RelationshipForm";
import BasicDataForm from "./steps/BasicDataForm";
import ExteriorStoriesForm from "./steps/ExteriorStoriesForm";
import SquareFootageForm from "./steps/SquareFootageForm";
import HomeBuilderForm from "./steps/HomeBuilderForm";
import PoolForm from "./steps/PoolForm";
import HearAboutForm from "./steps/HearAboutForm";
import SaleTimelineForm from "./steps/SaleTimelineForm";
import AccountForm from "./steps/AccountForm";
import CountertopsForm from "./steps/CountertopsForm";
import { sleep } from "../common/CommonUtils";
import { useHistory, useParams } from "react-router-dom";
import SubmissionCompletedForm from "./steps/SubmissionCompletedForm";
import PropertyTypeForm from "./steps/PropertyTypeForm";

interface MyProps {
  onSubmit?: (values: any, bag: any) => void;
  onEachStepSubmit?: (values: any, bag: any) => void;
  onStepChange?: (newStep: number, totalSteps: number) => void;
  lead: any;
}

export default function SellerLeadWizard(props: MyProps) {
  const history = useHistory();
  const initialValues = props.lead;

  //If the current url doesn't specify the step then set the url based on initialValues
  //Then deduce step number based on url

  const stepNames = [
    "property-type",
    "relationship",
    // "basic-data",
    "exterior-stories",
    // "square-feet",
    "parking",
    "hoa",
    "criteria",
    "solar",
    "countertops",
    "paint",
    "pool",
    // "home-builder",
    "hear-about",
    "sale-timeline",
    "account",
    "submission-complete",
  ];

  const params: any = useParams();
  const formStepSlug: any = params.step;
  useEffect(() => {
    console.log(`slug: ${formStepSlug}`);
    if (!formStepSlug) {
      const startingStep = nextIncompleteStep(stepNames, initialValues);
      history.push(`/seller-lead/${params.id}/${startingStep}`);
    }
  }, [formStepSlug]);

  const onSubmit =
    props.onSubmit || (async (values: any) => sleep(300).then(() => console.log("Wizard submit", values)));
  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        stepNames={stepNames}
        onSubmit={onSubmit}
        onEachStepSubmit={props.onEachStepSubmit}
        onStepChange={props.onStepChange}
      >
        <WizardStep
          validationSchema={Yup.object({
            propertyType: Yup.string().required("required"),
          })}
        >
          <PropertyTypeForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            relationship: Yup.string().required("required"),
          })}
        >
          <RelationshipForm />
        </WizardStep>
        {/* <WizardStep
          onStepSubmit={(values, bag) => (values.didVerifyBasicData = true)}
          validationSchema={Yup.object({
            yearBuilt: Yup.number().required().min(1000).max(2030).integer(),
          })}
        >
          <BasicDataForm />
        </WizardStep> */}
        <WizardStep
          validationSchema={Yup.object({
            exteriorStories: Yup.number().required().positive().integer(),
          })}
        >
          <ExteriorStoriesForm />
        </WizardStep>
        {/* <WizardStep
          onStepSubmit={(values, bag) => (values.didVerifySquareFeet = true)}
          validationSchema={Yup.object({
            squareFeet: Yup.number().required().positive().integer(),
          })}
        >
          <SquareFootageForm />
        </WizardStep> */}
        <WizardStep
          validationSchema={Yup.object({
            coveredParkingType: Yup.string().required("required"),
          })}
        >
          <CoveredParkingForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            isHOA: Yup.string().required("required"),
          })}
        >
          <HOAForm />
        </WizardStep>
        <WizardStep onStepSubmit={(values, bag) => (values.didFinishCriteria = true)}>
          {/* TODO validate one or more of the options is selected */}
          <CriteriaForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            hasSolar: Yup.string().required("required"),
          })}
        >
          <SolarForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            kitchenCounterType: Yup.string().required("required"),
          })}
        >
          <CountertopsForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            paintType: Yup.string().required("required"),
            paintCondition: Yup.string().required("required"),
          })}
        >
          <PaintForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            poolType: Yup.string().required("required"),
          })}
        >
          <PoolForm />
        </WizardStep>
        {/* <WizardStep
          validationSchema={Yup.object({
            workingWithHomebuilder: Yup.string().required("required"),
          })}
        >
          <HomeBuilderForm />
        </WizardStep> */}
        <WizardStep
          validationSchema={Yup.object({
            hearAbout: Yup.string().required("required"),
          })}
        >
          <HearAboutForm />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            saleTimeline: Yup.string().required("required"),
          })}
        >
          <SaleTimelineForm />
        </WizardStep>
        <WizardStep
          onStepSubmit={(values, bag) => (values.didCompleteLastStep = true)}
          validationSchema={Yup.object({
            accountEmail: Yup.string().email().required("required"),
            accountFullName: Yup.string().required("required"),
          })}
        >
          <AccountForm />
        </WizardStep>
        <WizardStep>
          <SubmissionCompletedForm />
        </WizardStep>
      </FormikWizard>

      <br />
      <br />
      <br />
    </>
  );
}

function nextIncompleteStep(stepNames: string[], formValues): string {
  for (const stepName of stepNames) {
    if (!isStepComplete(stepName, formValues)) {
      return stepName;
    }
  }

  return stepNames[stepNames.length - 1];
}

function isStepComplete(stepName: string, formValues): boolean {
  switch (stepName) {
    case "property-type":
      return !!formValues.propertyType;
    case "relationship":
      return !!formValues.relationship;
    case "basic-data":
      return !!formValues.didVerifyBasicData;
    case "exterior-stories":
      return !!formValues.exteriorStories;
    case "square-feet":
      return !!formValues.didVerifySquareFeet;
    case "parking":
      return !!formValues.coveredParkingType;
    case "hoa":
      return !!formValues.isHOA;
    case "criteria":
      return !!formValues.didFinishCriteria;
    case "solar":
      return !!formValues.hasSolar;
    case "countertops":
      return !!formValues.kitchenCounterType;
    case "paint":
      return !!formValues.paintType;
    case "pool":
      return !!formValues.poolType;
    case "home-builder":
      return !!formValues.workingWithHomebuilder;
    case "hear-about":
      return !!formValues.hearAbout;
    case "sale-timeline":
      return !!formValues.saleTimeline;
    case "account":
      //Always put them here even if they finished it
      return false && !!formValues.didCompleteLastStep;
    case "submission-complete":
      return false;
  }
  return false;
}

{
  /* Manual way to hook up mui to formik <Field name="relationship">
            {({ field, form }) => (
              <RadioGroup
                aria-label="relationship"
                name="relationship"
                value={field.value}
                onChange={(event, value) => {
                  form.setFieldValue("relationship", value);
                }}
              >
                <StyledFormControlLabel value="owner" control={<StyledRadio />} label="I am the owner of this home" />
                <StyledFormControlLabel value="agent" control={<StyledRadio />} label="I am a realtor or agent" />
                <StyledFormControlLabel value="other" control={<StyledRadio />} label="Other" />
              </RadioGroup>
            )}
          </Field> */
}
