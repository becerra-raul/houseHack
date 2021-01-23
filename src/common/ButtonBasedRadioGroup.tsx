import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mediumDarknessTextColor } from "../style/colors";
import { maxMobileWidth } from "../style/sizes";
import * as Icons from "@material-ui/icons";

interface MyProps {
  value: any;
  onChange: (newValue: any) => void;
  children?: any;
}

const ButtonBasedRadioGroup = (props: MyProps) => {
  const { value, onChange, children } = props;

  const newChildren = React.Children.map(children, (child) => {
    const childValue = child.props.value;
    const isSelected = childValue == value;
    const onClick = () => {
      onChange(childValue);
    };
    const addedProps = { variant: isSelected ? "contained" : "outlined", onClick };
    return React.cloneElement(child, addedProps);
  });
  return newChildren;
};

export default ButtonBasedRadioGroup;
