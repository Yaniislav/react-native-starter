export default function validate(values) {
  const errors = {};
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

  if (!values.email) {
    errors.email = 'Email field is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please, enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Password field is required';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password must contain at least 8 characters, including an upper-case letter and a number';
  }

  if (!values.firstName) {
    errors.firstName = 'First name field is required';
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = 'Please, enter a valid first name';
  }

  if (!values.lastName) {
    errors.lastName = 'First name field is required';
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = 'Please, enter a valid first name';
  }

  return errors;
}
