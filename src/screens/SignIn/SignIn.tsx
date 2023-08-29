import React, {ReactNode, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SignIn.module';
import Button from '../ui/Button/Button';
import {signInWithEmail} from '../../api/userApi';
import {IUser, SignInData} from '../../types';
import {useAppDispatch} from '../../redux/hooks';
import {setUser} from '../../redux/userReducer';
import Input from '../ui/Input/Input';
import CustomTheme from '../../theme';
import Footer from '../ui/Footer/Footer';

type Props = NativeStackScreenProps<ParamListBase>;

const SignIn: React.FC<Props> = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const checkPrevSignIn = async () => {
    const access_token = await AsyncStorage.getItem('access_token');

    if (access_token === null) {
      return;
    }

    console.log('access_token get', access_token);

    // dispatch(setUser());
    navigation.navigate('Catalog');
  };

  useEffect(() => {
    // checkPrevSignIn();
  }, []);

  const schema = yup.object({
    email: yup
      .string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: yup.string().required('This field is required!'),
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

  const checkSignInWithEmail = async (data: SignInData) => {
    try {
      const userInfo = await signInWithEmail(data);

      if (!userInfo) {
        return;
      }

      await dispatch(setUser(userInfo));

      await AsyncStorage.setItem('access_token', userInfo.access_token);

      await navigation.navigate('Catalog');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.titleStyle}>Log In</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              errors={errors.email}
              upPlaceholder={true}
              type="numbers-and-punctuation"
              underlineColorAndroid="transparent"
              hintColor={CustomTheme.colors.dark_blue}
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              image={require('../../../assets/img/Mail_disabled.png')}
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
              upPlaceholder={true}
              hintColor={CustomTheme.colors.dark_blue}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              image={require('../../../assets/img/View.png')}
              hint="Enter your password"
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
            onPress={handleSubmit(checkSignInWithEmail)}
            title="Log In"
          />
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            backColor={CustomTheme.colors.dark_grey}
            height={44}
            colorText={CustomTheme.colors.light}
            fontSize={16}
            onPress={() => navigation.navigate('SignUp')}
            title="Sign Up"
          />
        </View>
        <Image
          style={styles.image}
          source={require('../../../assets/img/personLogin.png')}
        />
        {/* <Footer navigation={navigation} /> */}
      </ScrollView>
    </View>
  );
};

export default React.memo(SignIn);
