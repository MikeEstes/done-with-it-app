import React from 'react';
import { Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from './forms';
import logger from '../utility/logger';
import messagesApi from '../api/messages';

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    try {
      const result = await messagesApi.send(message, listing.id);

      if (!result.ok) {
        logger.log('Error', result);
        return Alert.alert(
          'Error',
          'Could not send the message to the seller.'
        );
      }
    } catch (error) {
      logger.log(error);
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Awesome!',
        body: 'Your message was sent to the seller.',
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label('Message'),
  });

  return (
    <Form
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <FormField
        maxLegth={255}
        multiline
        name='message'
        numberOfLines={3}
        placeholder='Message...'
      />
      <SubmitButton title='Contact Seller' />
    </Form>
  );
};

export default ContactSellerForm;
