import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import * as FormikMui from "formik-material-ui";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";

export const useModalControls = (): any => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return [isOpen, open, close];
};
