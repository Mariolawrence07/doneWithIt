import React from "react";
import { useFormikContext, Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  const { initialValues, onSubmit, validationSchema } = useFormikContext();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
