import { validators } from './validators/index';

export const validateField = (fieldName, value) => {
  let errorMessage = '';

  const errorActions = {
    firstName: () =>
      !validators.name.test(value) && '*Name can only have letters',

    lastName: () =>
      !validators.name.test(value) && '*Lastame can only have letters',

    bookingEmail: () =>
      !validators.email.test(value) && '*Invalid email. e.g., test@example.com',

    phone: () => !validators.phone.test(value) && '*Phone can only have number',

    persons: () => !validators.persons.test(value) && '*Must be a number',
  };
  errorMessage = errorActions[fieldName]();

  return errorMessage;
};
