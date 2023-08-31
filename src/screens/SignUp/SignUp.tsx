import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import styles from './SignUp.styles';
import Button from 'src/components/Button';
import {SignUpData} from 'src/types/auth';
import {useAppDispatch} from 'src/redux/hooks';
import Input from 'src/components/Input';
import {userRegister} from 'src/api/userApi';
import CustomTheme from 'src/theme';
import {setUser} from 'src/redux/slices/userReducer';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  emailValidation,
  passwordValidation,
  repeatPasswordValidation,
} from 'src/utils/schemas';
import {setAsyncStorageItem} from 'src/utils/asyncStorage';

type RootStackParamList = {
  Catalog: undefined;
  SignIn: undefined;
};

const SignUp: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const [apiError, setApiError] = useState({
    code: 0,
    message: '',
  });

  const schema = yup.object({
    email: emailValidation,
    password: passwordValidation,
    repeatPassword: repeatPasswordValidation,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const checkSignUp = async (data: SignUpData) => {
    try {
      console.log('Hello');

      const res = await userRegister({
        email: data.email,
        password: data.password,
      });

      await dispatch(setUser(res!));
      setAsyncStorageItem('theme', 'light');

      await navigation.navigate('Catalog');
    } catch (error: any) {
      console.log('throw ', error);
      //Если код 422, на почту не ставить ошибку
      setApiError(error);
      console.log(apiError.code);
    }
  };

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.titleStyle}>Sign Up</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              errors={
                (apiError.code !== 422 && apiError.message) ||
                errors.email?.message
              }
              type="numbers-and-punctuation"
              image={require('src/assets/img/Mail.png')}
              containerStyle={styles.inputContainer}
              underlineColorAndroid="transparent"
              hintColor={CustomTheme.colors.dark_blue}
              textStyle={styles.inputText}
              upPlaceholder={true}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              hint="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Password"
              errors={
                (apiError.code !== 400 && apiError.message) ||
                errors.password?.message
              }
              type="default"
              image={require('src/assets/img/View.png')}
              underlineColorAndroid="transparent"
              hintColor={CustomTheme.colors.dark_blue}
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              upPlaceholder={true}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              hint="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              secure
            />
          )}
        />
        <Controller
          control={control}
          name="repeatPassword"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Password"
              errors={
                (apiError.code !== 400 && apiError.message) ||
                errors.repeatPassword?.message
              }
              type="default"
              image={require('src/assets/img/View.png')}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              upPlaceholder={true}
              hintColor={CustomTheme.colors.dark_blue}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              hint="Repeat your password without errors"
              onBlur={onBlur}
              onChangeText={onChange}
              secure
            />
          )}
        />
        <View style={styles.buttonsSection}>
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            height={44}
            colorText={CustomTheme.colors.light}
            fontSize={16}
            onPress={handleSubmit(checkSignUp)}
            title="Sign Up"
          />
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            height={44}
            colorText={CustomTheme.colors.light}
            fontSize={16}
            onPress={() => navigation.navigate('SignIn')}
            title="Log In"
            backColor={CustomTheme.colors.dark_grey}
          />
        </View>
        <Image
          style={styles.image}
          source={require('src/assets/img/personLogin.png')}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;
