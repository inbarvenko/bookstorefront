import * as yup from 'yup';

export const emailValidation = yup
  .string()
  .trim()
  .lowercase()
  .email('This is not a valid email.')
  .required('This field is required!');

export const passwordValidation = yup
  .string()
  .trim()
  .min(3, 'Password must be longer than 6 characters')
  .max(8, 'Password must be shorter than 12 character')
  .required('This field is required!');

export const repeatPasswordValidation = yup
  .string()
  .oneOf([yup.ref('password'), undefined], 'Password inputs must be the same')
  .required('this field is required');
