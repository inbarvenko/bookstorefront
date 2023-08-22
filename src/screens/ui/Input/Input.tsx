import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import type { ReactNode } from 'react';
import type { KeyboardTypeOptions, TextStyle, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, TextInputProps, StyleProp } from 'react-native';
import type { FieldError } from 'react-hook-form';

import styles from './Input.module';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTheme from '../../../theme';

type Props = {
  placeholder: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  containerStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  containerErrorStyle: StyleProp<ViewStyle>;
  textErrorStyle: StyleProp<TextStyle>;
  value?: string;
  hint: string;
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
} & TextInputProps;

const Input: React.FC<Props> = ({
  placeholder,
  containerStyle,
  textStyle,
  containerErrorStyle,
  textErrorStyle,
  errors,
  secure,
  hint,
  onBlur,
  ...props }) => {
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
    <View
      style={containerStyle}
    >
      <View
        style={[
          styles.inputRowContainer,
          inputState.inputFocus && styles.inputFocusStyle,
          !!errors?.message && containerErrorStyle]}
      >
        <TouchableOpacity
          onPress={handleVisibleText}
          disabled={!secure}
          style={styles.touchableStyle }
        >
          {
            secure && inputState.visiblePassword
              ? <Icon name='eye-slash' size={20} color={inputState.inputFocus ? CustomTheme.colors.dark_blue : CustomTheme.colors.dark_grey} />
              : (placeholder === 'Email' ?
                <Icon name='envelope' size={20} color={inputState.inputFocus ? CustomTheme.colors.dark_blue : CustomTheme.colors.dark_grey}/> : 
                <Icon name='eye' size={20} color={inputState.inputFocus ? CustomTheme.colors.dark_blue : CustomTheme.colors.dark_grey} /> )
              
          }
        </TouchableOpacity>
        <View style={inputState.inputFocus && styles.containerPlaceholderFocus}>
          {inputState.inputFocus && 
          <Text style={styles.hintText}>{placeholder}</Text>}
          <TextInput
            {...props}
            placeholder={placeholder}
            secureTextEntry={secure && inputState.visiblePassword}
            style={[styles.inputStyle, textStyle]}
            onBlur={handleBlur}
            placeholderTextColor={CustomTheme.colors.dark_grey}
            onFocus={handleFocus}
          />
        </View>
      </View>
      <Text
        style={[
          styles.hintText,
          !!errors?.message &&
          textErrorStyle,
        ]}
      >{(errors?.message || hint) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;