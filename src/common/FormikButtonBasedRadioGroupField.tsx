import React, { useState } from "react";
import { Field } from "formik";
import ButtonBasedRadioGroup from "./ButtonBasedRadioGroup";

interface MyProps {
  name: string;
  children?: any;
}

const FormikButtonBasedRadioGroupField = (props: MyProps) => {
  const { name, children } = props;

  return (
    <Field name={name}>
      {({ field, form }) => (
        <ButtonBasedRadioGroup
          value={field.value}
          onChange={(value) => {
            form.setFieldValue(name, value);
          }}
        >
          {children}
        </ButtonBasedRadioGroup>
      )}
    </Field>
  );
};

export default FormikButtonBasedRadioGroupField;
