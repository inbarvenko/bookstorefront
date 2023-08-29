import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from 'react-native';

import type {ReactNode} from 'react';
import {
  KeyboardTypeOptions,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  TextInputProps,
  StyleProp,
  Image,
} from 'react-native';
import type {FieldError} from 'react-hook-form';

import styles from './Input.styles';
import CustomTheme from 'src/theme';

type Props = {
  placeholder: string;
  errors?: FieldError | undefined;
  type?: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  containerErrorStyle?: StyleProp<ViewStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  value?: string;
  hintColor?: string;
  image?: ImageSourcePropType;
  hint?: string;
  editable?: boolean;
  info?: boolean;
  upPlaceholder: boolean;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & TextInputProps;

const Input: React.FC<Props> = ({
  placeholder,
  containerStyle,
  textStyle,
  containerErrorStyle,
  textErrorStyle,
  errors,
  info,
  image,
  secure,
  hint,
  upPlaceholder,
  hintColor,
  onBlur,
  editable,
  ...props
}) => {
  const [inputState, setInputState] = React.useState({
    visiblePassword: true,
    inputFocus: false,
  });

  const handleVisibleText = () => {
    setInputState({
      ...inputState,
      visiblePassword: !inputState.visiblePassword,
    });
  };
  const handleFocus = () => {
    setInputState({
      ...inputState,
      inputFocus: !inputState.inputFocus,
    });
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(event);
    setInputState({
      ...inputState,
      inputFocus: !inputState.inputFocus,
    });
  };

  return (
    <View style={containerStyle}>
      <View
        style={[
          styles.inputRowContainer,
          info && editable && styles.border,
          inputState.inputFocus && styles.inputFocusStyle,
          !!errors?.message && containerErrorStyle,
        ]}>
        {image && (
          <TouchableOpacity
            onPress={handleVisibleText}
            disabled={!secure}
            style={styles.touchableStyle}>
            {secure && inputState.visiblePassword ? (
              <Image
                source={require('src/assets/img/Hide.png')}
                style={styles.img}
              />
            ) : (
              <Image source={image!} style={styles.img} />
            )}
          </TouchableOpacity>
        )}
        <View
          style={[
            inputState.inputFocus && styles.containerPlaceholderFocus,
            styles.fullWidth,
          ]}>
          {((inputState.inputFocus && upPlaceholder) || info) && (
            <Text style={[styles.hintText, {color: hintColor}]}>
              {placeholder}
            </Text>
          )}
          <TextInput
            {...props}
            placeholder={inputState.inputFocus ? '' : placeholder}
            secureTextEntry={secure && inputState.visiblePassword}
            style={[
              styles.inputStyle,
              textStyle,
              upPlaceholder ? styles.fullHeight : styles.paddings,
              ((inputState.inputFocus && upPlaceholder) || info) &&
                styles.textInput,
            ]}
            editable={editable}
            onBlur={handleBlur}
            placeholderTextColor={CustomTheme.colors.dark_grey}
            onFocus={handleFocus}
          />
        </View>
      </View>
      <Text style={[styles.hintText, !!errors?.message && textErrorStyle]}>
        {(errors?.message || hint) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;
