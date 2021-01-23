import React, { useEffect, useState } from "react";
import { SellerLeadMainForm } from "./SellerLeadMainForm";
import { SellerLeadPageLeftBar } from "./SellerLeadPageLeftBar";
import { SellerLeadPageTopBar } from "./SellerLeadPageTopBar";
import { Grid, Hidden, Container, Box } from "@material-ui/core";
import * as colors from "../style/colors";
import { leftSidebarWidth, maxMobileWidth } from "../style/sizes";
import styled from "styled-components";
import { PropertyInfoBlock } from "./PropertyInfoBlock";
import { useHistory, useParams } from "react-router-dom";
import { sleep, useIsMobileWidth } from "../common/CommonUtils";
import { FirebaseAppProvider, useFirestoreDocData, useFirestore, SuspenseWithPerf } from "reactfire";
import { SellerLeadPageBottomBar } from "./SellerLeadPageBottomBar";

const StyledLeftBarContainer = styled.div`
  width: ${leftSidebarWidth}px;
  flex-shrink: 0;
  background-color: white;

  @media (max-width: ${maxMobileWidth}px) {
    display: none !important;
  }
`;

const StyledRightFormContainer = styled.div`
  @media (max-width: ${maxMobileWidth}px) {
    margin: 0 auto;
  }
`;

const StyledLeftRightContainer = styled.div`
  background-color: ${colors.backgroundBlue};
  display: flex;
  flex-grow: 1;
`;

export function SellerLeadPage() {
  return (
    <>
      <SuspenseWithPerf fallback={<LoadingComponent />} traceId={"load-lead-status"}>
        <SellerLeadPageWithInitialData />
      </SuspenseWithPerf>
    </>
  );
}

function LoadingComponent() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>Loading...</div>
    </div>
  );
}

function SellerLeadPageWithInitialData() {
  const params: any = useParams();
  const leadRef = useFirestore().collection("leads").doc(params.id);
  const isMobileWidth = useIsMobileWidth();
  const lead: any = useFirestoreDocData(leadRef);

  useEffect(() => {
    console.log(lead);
  }, []);

  //TODO: handle it not being found

  const [progress, setProgress] = useState(0);
  const onProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  return (
    <Box style={{ backgroundColor: colors.background, height: "100vh", minHeight: "900px" }}>
      <Container
        maxWidth="lg"
        disableGutters
        style={{ height: "100%", backgroundColor: "white", display: "flex", flexFlow: "column" }}
      >
        <div style={{ display: isMobileWidth ? "block" : "none" }}>
          <SellerLeadPageTopBar progress={progress * 100} />
        </div>
        <StyledLeftRightContainer>
          <StyledLeftBarContainer>
            <SellerLeadPageLeftBar propertyAddress={lead.formattedAddress} />
          </StyledLeftBarContainer>

          <StyledRightFormContainer>
            <SellerLeadMainForm onProgressChange={onProgressChange} lead={lead} leadRef={leadRef} />
          </StyledRightFormContainer>
        </StyledLeftRightContainer>
      </Container>
    </Box>
  );
}
