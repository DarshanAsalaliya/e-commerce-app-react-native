import * as Yup from 'yup';
import { YupErrorMessage } from '../constant';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[a-zA-Z]{2,30}$/;

export const ValidationSchema = Yup.object({
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(emailRegex, YupErrorMessage.emailError),
  pass: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
});

export const ValidationSchemaSignup = Yup.object({
  firstname: Yup.string()
    .required(YupErrorMessage.require)
    .matches(nameRegex, YupErrorMessage.nameError),
  lastname: Yup.string()
    .required(YupErrorMessage.require)
    .matches(nameRegex, YupErrorMessage.nameError),
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(emailRegex, YupErrorMessage.emailError),
  pass: Yup.string()
    .required(YupErrorMessage.require)
    .min(7, YupErrorMessage.passwordError),
});

export const ValidationSchemaUser = Yup.object({
  first_name: Yup.string()
    .required(YupErrorMessage.require)
    .matches(nameRegex, YupErrorMessage.nameError),
  last_name: Yup.string()
    .required(YupErrorMessage.require)
    .matches(nameRegex, YupErrorMessage.nameError),
  email: Yup.string()
    .required(YupErrorMessage.require)
    .matches(emailRegex, YupErrorMessage.emailError),
});
