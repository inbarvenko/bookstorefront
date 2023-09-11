import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import PoppinsText from 'src/components/PoppinsText/PoppinsText';
import getStyle from './SignUp.styles';
import Button from 'src/components/Button';
import {SignUpData} from 'src/types/auth';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
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
import {images} from 'src/constants/images';
import {AuthStackParamList} from 'src/navigation/AuthStack';
import {TabParamListLog} from 'src/navigation/TabNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<TabParamListLog & AuthStackParamList>>();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

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
      const userInfo = await userRegister({
        email: data.email,
        password: data.password,
      });

      if (userInfo.error) {
        setApiError({
          code: userInfo.error.status!,
          message: userInfo.error.message,
        });
        console.log(apiError.code);
      }

      await dispatch(setUser({email: userInfo.email!}));
      setAsyncStorageItem('theme', 'light');

      await navigation.navigate('Catalog');
    } catch (error: any) {
      console.log('throw ', error);
      //TODO: Если код 422, на почту не ставить ошибку
    }
  };

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.screenContainer}>
        <KeyboardAwareScrollView resetScrollToCoords={{x: 0, y: 0}}>
          <PoppinsText style={styles.titleStyle}>Sign Up</PoppinsText>
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
                image={images.mail_grey}
                containerStyle={styles.inputContainer}
                underlineColorAndroid="transparent"
                hintColor={CustomTheme.colors[theme].dark_blue}
                textStyle={styles.inputText}
                upPlaceholder
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
                image={images.open_eye}
                underlineColorAndroid="transparent"
                hintColor={CustomTheme.colors[theme].dark_blue}
                containerStyle={styles.inputContainer}
                textStyle={styles.inputText}
                upPlaceholder
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
                image={images.open_eye}
                underlineColorAndroid="transparent"
                containerStyle={styles.inputContainer}
                textStyle={styles.inputText}
                upPlaceholder
                hintColor={CustomTheme.colors[theme].dark_blue}
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
        </KeyboardAwareScrollView>

        <View style={styles.buttonsSection}>
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            height={44}
            colorText={CustomTheme.colors[theme].light}
            fontSize={16}
            onPress={handleSubmit(checkSignUp)}
            title="Sign Up"
          />
          <Button
            activeOpacity={0.8}
            styleButton={styles.buttonContainer}
            width={151}
            height={44}
            colorText={CustomTheme.colors[theme].light}
            fontSize={16}
            onPress={() => navigation.navigate('SignIn')}
            title="Log In"
            backColor={CustomTheme.colors[theme].dark_grey}
          />
        </View>
        <Image style={styles.image} source={images.picture_auth} />
      </ScrollView>
    </View>
  );
};

export default SignUp;
