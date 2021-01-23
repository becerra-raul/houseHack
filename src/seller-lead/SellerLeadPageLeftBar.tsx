import { Box, Container, Link, Paper, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { PropertyInfoBlock } from "./PropertyInfoBlock";
import logo from "../images/logo.png";
import styled from "styled-components";
import { ReactComponent as DetailedHouse } from "../images/detailedhouse.svg";

interface MyProps {
  propertyAddress: string;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0;
`;

const StyledDetailedHouse = styled(DetailedHouse)`
  margin: 50px 0 20px;
`;

export function SellerLeadPageLeftBar(props: MyProps) {
  const theme = useTheme();
  const clickedNotYourAddress = (event: React.MouseEvent) => {
    event.preventDefault();
    alert("TODO: Have a modal pop up");
  };
  return (
    <StyledContainer>
      <img src={logo} height={93} width={240} alt="logo" />
      <StyledDetailedHouse />
      <PropertyInfoBlock propertyAddress={props.propertyAddress} />
    </StyledContainer>
  );
}
