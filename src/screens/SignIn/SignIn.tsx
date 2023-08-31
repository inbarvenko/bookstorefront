import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {useNavigation} from '@react-navigation/native';
import getStyle from './SignIn.styles';
import Button from 'src/components/Button';
import {signInWithEmail} from 'src/api/userApi';
import {SignInData} from 'src/types/auth';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
import {setUser} from 'src/redux/slices/userReducer';
import Input from 'src/components/Input';
import CustomTheme from 'src/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {emailValidation, passwordValidation} from 'src/utils/schemas';

type RootStackParamList = {
  Catalog: undefined;
  SignUp: undefined;
};

const SignIn: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const [apiError, setApiError] = useState('');

  const dispatch = useAppDispatch();

  const schema = yup.object({
    emailIn: emailValidation,
    passwordIn: passwordValidation,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      emailIn: '',
      passwordIn: '',
    },
  });

  const checkSignInWithEmail = async (data: SignInData) => {
    try {
      const userInfo = await signInWithEmail(data);

      if (!userInfo) {
        return;
      }

      await dispatch(setUser(userInfo));

      await navigation.navigate('Catalog');
    } catch (error: any) {
      console.log('throw ', error);
      setApiError(error);
    }
  };

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.titleStyle}>Log In</Text>
        <Controller
          control={control}
          name="emailIn"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              errors={apiError || errors.emailIn?.message}
              upPlaceholder={true}
              type="numbers-and-punctuation"
              underlineColorAndroid="transparent"
              hintColor={CustomTheme.colors[theme].dark_blue}
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              image={require('src/assets/img/Mail_disabled.png')}
              hint="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordIn"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Password"
              errors={apiError || errors.passwordIn?.message}
              type="default"
              upPlaceholder={true}
              hintColor={CustomTheme.colors[theme].dark_blue}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              containerErrorStyle={styles.errorSectionStyle}
              textErrorStyle={styles.errorTextStyle}
              value={value}
              image={require('src/assets/img/View.png')}
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
            colorText={CustomTheme.colors[theme].light}
            fontSize={16}
            onPress={handleSubmit(checkSignInWithEmail)}
            title="Log In"
          />
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            backColor={CustomTheme.colors[theme].dark_grey}
            height={44}
            colorText={CustomTheme.colors[theme].light}
            fontSize={16}
            onPress={() => navigation.navigate('SignUp')}
            title="Sign Up"
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

export default React.memo(SignIn);
