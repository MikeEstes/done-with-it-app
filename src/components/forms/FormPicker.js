import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';
import { number } from 'yup/lib/locale';

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  width = '100%',
  placeholder,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
