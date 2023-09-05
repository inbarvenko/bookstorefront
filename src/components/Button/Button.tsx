import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import getStyle from './Button.styles';
import {useAppSelector} from 'src/redux/hooks';

type Props = {
  fontSize?: number;
  height?: number;
  width?: number;
  colorText?: string;
  styleButton?: any;
  title: string;
  backColor?: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({
  fontSize,
  height,
  width,
  styleButton,
  colorText,
  title,
  backColor,
  ...props
}) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({
    fontSize,
    colorText,
    width,
    height,
    backColor,
    theme: {
      theme: theme,
    },
  });

  return (
    <View style={[styles.appButtonContainer, styleButton]}>
      <TouchableOpacity {...props}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
