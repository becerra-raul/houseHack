import { Box, Container, Link, Paper, Typography, useTheme } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mainTextColor } from "../style/colors";
import { DashedUnderline } from "./CommonStyledFormElements";

interface MyProps {
  propertyAddress: string;
}

const StyledContainer = styled.div`
  color: ${mainTextColor};
  margin: 1em;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
`;

export function PropertyInfoBlock(props: MyProps) {
  const theme = useTheme();
  const clickedNotYourAddress = (event: React.MouseEvent) => {
    event.preventDefault();
    alert("TODO: Have a modal pop up");
  };

  const addressParts = props.propertyAddress?.split(", ") || ["", "", ""];
  const firstLine = addressParts[0];
  const secondLine = addressParts[1] + ", " + addressParts[2];

  return (
    <StyledContainer>
      <div>{firstLine}</div>
      <div>{secondLine}</div>
      {/* <StyledLink href="#" onClick={clickedNotYourAddress}>
        <DashedUnderline>Not your address?</DashedUnderline>
      </StyledLink> */}
    </StyledContainer>
  );
}
