import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Hidden, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import * as FormikMui from "formik-material-ui";
import * as Icons from "@material-ui/icons";
import { Field, useFormikContext } from "formik";

export const onChangeForCheckboxesWithNoneOfTheAbove = (form, noneOfTheAboveField, otherFields) => {
  return (event) => {
    const checked = event.currentTarget.checked;
    const targetName = event.currentTarget.name;
    const isNoneOfTheAboveField = targetName == noneOfTheAboveField;

    if (checked) {
      if (isNoneOfTheAboveField) {
        otherFields.forEach((otherField) => form.setFieldValue(otherField, false));
      } else {
        form.setFieldValue(noneOfTheAboveField, false);
      }
    }
    form.setFieldValue(targetName, checked);
  };
};
