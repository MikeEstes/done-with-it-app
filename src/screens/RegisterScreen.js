import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    try {
      const result = await registerApi.request(userInfo);

      if (!result.ok) {
        if (result.data) setError(result.data.error);
        else {
          setError('An unexpected error occured.');
          console.log(result);
        }
        return;
      }

      const { data: authToken } = await loginApi.request(
        userInfo.email,
        userInfo.password
      );
      auth.logIn(authToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Register' />
        </Form>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
