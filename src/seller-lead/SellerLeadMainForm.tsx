import React from "react";
import styled from "styled-components";
import { backgroundBlue } from "../style/colors";
import { maxMobileWidth, maxWidthForVerticalLayout } from "../style/sizes";
import { PropertyInfoBlock } from "./PropertyInfoBlock";
import SellerLeadWizard from "./SellerLeadWizard";

interface MyProps {
  onProgressChange: (newProgress) => void;
  lead: any;
  leadRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
}

const StyledDiv = styled.div`
  margin: 80px 0 120px 80px;
  max-width: 750px;

  @media screen and (max-width: ${maxWidthForVerticalLayout}px) {
    margin: 80px 40px 120px;
    max-width: 475px;
  }

  @media screen and (max-width: ${maxMobileWidth}px) {
    margin: 40px auto 120px;
    padding: 0 15px;
    max-width: 400px;
  }
`;

const StyledPropertyInfoBlockContainer = styled.div`
  > div {
    margin: 0 !important;
    width: 100% !important;
    max-width: initial !important;
  }

  @media (min-width: ${maxMobileWidth + 1}px) {
    display: none !important;
  }
`;

export function SellerLeadMainForm(props: MyProps) {
  const onStepChange = (newStep: number, totalSteps: number) => {
    window.scrollTo(0, 0);
    props.onProgressChange(newStep / totalSteps);
  };
  const onEachStepSubmit = (values: any, bag: any) => {
    props.leadRef.set(values);
    // console.log(values);
    // console.log(bag);
  };

  return (
    <StyledDiv>
      <SellerLeadWizard onStepChange={onStepChange} lead={props.lead} onEachStepSubmit={onEachStepSubmit} />

      {/* <StyledPropertyInfoBlockContainer>
        <PropertyInfoBlock propertyAddress={props.lead.formattedAddress} />
      </StyledPropertyInfoBlockContainer> */}
    </StyledDiv>
  );
}
