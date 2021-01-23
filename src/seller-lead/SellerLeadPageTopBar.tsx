import { Link } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { StyledProgressBar } from "../common/ProgressBar";
import logo from "../images/logo.png";
import { vibrantBlue } from "../style/colors";
import { SaveProgressButton } from "./SaveProgressButton";

interface MyProps {
  progress: number;
}

export function SellerLeadPageTopBar(props: MyProps) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          height: "120px",
          padding: "0 25px",
          display: "flex",
          // justifyContent: "space-between",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} height={77} style={{ marginTop: "5px" }} alt="logo" />
        <span style={{ marginLeft: 15 }}>
          <SaveProgressButton />
        </span>
      </div>
      {/* <ProgressBar variant="determinate" value={props.progress} /> */}
    </div>
  );
}
