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

import getStyle from './Input.styles';
import CustomTheme from 'src/theme';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';

type Props = {
  placeholder: string;
  errors?: string | undefined;
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
  isEditable?: boolean;
  withLabel?: boolean;
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
  withLabel,
  image,
  secure,
  hint,
  upPlaceholder,
  hintColor,
  onBlur,
  isEditable,
  ...props
}) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

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
          withLabel && isEditable && styles.border,
          inputState.inputFocus && styles.inputFocusStyle,
          !!errors! && containerErrorStyle,
        ]}>
        {image && (
          <TouchableOpacity
            onPress={handleVisibleText}
            disabled={!secure}
            style={styles.touchableStyle}>
            {secure && inputState.visiblePassword ? (
              <Image source={images.closed_eye} style={styles.img} />
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
          {((inputState.inputFocus && upPlaceholder) || withLabel) && (
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
              ((inputState.inputFocus && upPlaceholder) || withLabel) &&
                styles.textInput,
            ]}
            editable={isEditable}
            onBlur={handleBlur}
            placeholderTextColor={CustomTheme.colors[theme].dark_grey}
            onFocus={handleFocus}
          />
        </View>
      </View>
      <Text style={[styles.hintText, !!errors! && textErrorStyle]}>
        {(errors! || hint) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;
