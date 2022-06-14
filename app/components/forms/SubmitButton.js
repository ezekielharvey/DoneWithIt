import React from 'react';
import AppButton from '../Button';
import { useFormikContext } from 'formik';
import colors from '../../config/colors';

function SubmitButton({ title, color='black', textColor }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} color='black' textColor='white'/>;
}

export default SubmitButton;
