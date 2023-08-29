import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SignIn.styles';
import Button from '@/components/Button/Button';
import {signInWithEmail} from '@/api/userApi';
import {SignInData} from '@/types';
import {useAppDispatch} from '@/redux/hooks';
import {setUser} from '@/redux/slices/userReducer';
import Input from '@/components/Input/Input';
import CustomTheme from '@/theme';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Catalog: undefined;
};

const SignIn: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const dispatch = useAppDispatch();

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
    <View style={styles.flex}>
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
              image={require('+/Mail.png')}
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
              image={require('+/View.png')}
              hint="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              secure
            />
          )}
        />
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
        <Image style={styles.image} source={require('+/personLogin.png')} />
      </ScrollView>
    </View>
  );
};

export default React.memo(SignIn);
