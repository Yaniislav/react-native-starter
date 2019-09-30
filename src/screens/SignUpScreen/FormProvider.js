import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';

const SignUpSchema = object().shape({
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  email: string()
    .email('Invalid email')
    .required('Required'),
  password: string().required('Required'),
});

const INITIAL_SIGN_UP_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const FormProvider = ({ children, onSubmit }) => {
  /* :: (object, object) -> Promise<void> */
  const handleSignIn = async (formData, actions) => {
    try {
      onSubmit(formData);
    } catch (error) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_SIGN_UP_VALUES }}
      validationSchema={SignUpSchema}
      onSubmit={handleSignIn}
    >
      {children}
    </Formik>
  );
};

FormProvider.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default FormProvider;
