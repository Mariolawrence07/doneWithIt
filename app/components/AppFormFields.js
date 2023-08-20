import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

function AppFormFields({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        // keyboardType="email-address"
        // placeholder="Email"
        // textContentType="emailAddress"
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormFields;
