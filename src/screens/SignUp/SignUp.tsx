import React from 'react';
import {View, Text, TextInput, ScrollView, Image} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './SignUp.module';
import Button from '../ui/Button/Button';
import {SignUpData} from '../../types';
import {useAppDispatch} from '../../redux/hooks';
import Input from '../ui/Input/Input';
import {userRegister} from '../../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTheme from '../../theme';
import Footer from '../ui/Footer/Footer';
import {setUser} from '../../redux/userReducer';

type Props = NativeStackScreenProps<ParamListBase>;

const SignUp: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const schema = yup.object({
    email: yup
      .string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: yup.string().required('This field is required!'),
    repeatPassword: yup.string().required('This field is required!'),
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
    },
  });

  const checkSignUp = async (data: SignUpData) => {
    try {
      if (data.repeatPassword !== data.password) {
        return;
      }

      const res = await userRegister({
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      });

      if (res!.error) {
        return res!.error;
      }
      await dispatch(setUser(res!.data));

      const jsonValue = await JSON.stringify(data);
      console.log('jsonValue set', jsonValue);
      await AsyncStorage.setItem('user', jsonValue);

      await navigation.navigate('Catalog');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.titleStyle}>Sign Up</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              errors={errors.email}
              type="numbers-and-punctuation"
              image={require('../../../assets/img/Mail.png')}
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
              errors={errors.password}
              type="default"
              image={require('../../../assets/img/View.png')}
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
              errors={errors.password}
              type="default"
              image={require('../../../assets/img/View.png')}
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
          />
        </View>
        <Image
          style={styles.image}
          source={require('../../../assets/img/personLogin.png')}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;
