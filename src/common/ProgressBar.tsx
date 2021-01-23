import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";
import { fadedBlue, vibrantBlue } from "../style/colors";

export const StyledProgressBar = styled(LinearProgress)`
  // border-radius: 5px;
  height: 5px;
  background-color: ${fadedBlue};
  .MuiLinearProgress-bar {
    background: ${vibrantBlue};
    border-radius: 5px;
    transition: transform 0.5s ease 0s;
  }
`;
