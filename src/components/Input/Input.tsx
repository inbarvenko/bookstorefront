import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

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
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PoppinsText from '../PoppinsText/PoppinsText';

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

  useEffect(() => {
    changeColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditable, inputState.inputFocus]);

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(event);
    setInputState({
      ...inputState,
      inputFocus: !inputState.inputFocus,
    });
  };

  const isLabelFocused = (inputState.inputFocus && upPlaceholder) || withLabel;

  const initialColor = useSharedValue(CustomTheme.colors[theme].light);

  const changeColor = () => {
    initialColor.value = withTiming(
      inputState.inputFocus
        ? CustomTheme.colors[theme].dark_blue
        : isEditable
        ? CustomTheme.colors[theme].dark_grey
        : CustomTheme.colors[theme].light,
      {
        duration: 1000,
      },
    );
  };
  const animatedBorder = useAnimatedStyle(() => {
    return {
      borderColor: initialColor.value,
      borderWidth: 2,
      borderRadius: 16,
    };
  });

  return (
    <View style={containerStyle}>
      <Animated.View style={animatedBorder}>
        <View
          style={[styles.inputRowContainer, !!errors! && containerErrorStyle]}>
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
            {isLabelFocused && (
              <PoppinsText style={[styles.hintText, {color: hintColor}]}>
                {placeholder}
              </PoppinsText>
            )}
            <TextInput
              {...props}
              placeholder={inputState.inputFocus ? '' : placeholder}
              secureTextEntry={secure && inputState.visiblePassword}
              style={[
                styles.inputStyle,
                textStyle,
                upPlaceholder ? styles.fullHeight : styles.paddings,
                isLabelFocused && styles.textInput,
              ]}
              editable={isEditable}
              onBlur={handleBlur}
              placeholderTextColor={CustomTheme.colors.light.dark_grey}
              onFocus={handleFocus}
            />
          </View>
        </View>
      </Animated.View>
      <PoppinsText style={[styles.hintText, !!errors! && textErrorStyle]}>
        {errors! || hint!}
      </PoppinsText>
    </View>
  );
};

export default Input;
