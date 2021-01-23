import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";
import * as Icons from "@material-ui/icons";
import { useFormikContext } from "formik";

interface MyProps {
  name: string;
  children?: any;
  className?: any;
}

const StyledContainer = styled.div`
  > div {
    cursor: pointer;
  }
`;

export default function DivBasedRadioGroup(props: MyProps) {
  const { name, children, className } = props;
  const form: any = useFormikContext();

  const newChildren = React.Children.map(children, (child) => {
    const childValue = child.props["data-value"];
    const isSelected = childValue == form.values[name];
    const onClick = () => {
      form.setFieldValue(name, childValue);
    };
    const addedProps = { "data-is-selected": isSelected, onClick };
    return React.cloneElement(child, addedProps);
  });
  return <StyledContainer className={className}>{newChildren}</StyledContainer>;
}
