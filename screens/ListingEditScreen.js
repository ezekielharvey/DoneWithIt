import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../app/components/CategoryPickerItem';

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../app/components/forms';
import Screen from '../app/components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
  { label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car' },
  { label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera' },
  { label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards' },
  { label: 'Clothing', value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
  { label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
  { label: 'Movies & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },
  { label: 'Books', value: 8, backgroundColor: '#a55eea', icon: 'book-open-variant' },
  { label: 'Other', value: 9, backgroundColor: '#778ca3', icon: 'application' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;