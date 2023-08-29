import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import styles from './Button.styles';

type Props = {
  fontSize?: number;
  height?: number;
  width?: number;
  colorText?: string;
  styleButton?: any;
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({
  fontSize,
  height,
  width,
  styleButton,
  colorText,
  title,
  ...props
}) => {
  return (
    <View style={[styles({width, height}).appButtonContainer, styleButton]}>
      <TouchableOpacity {...props}>
        <Text style={styles({fontSize, colorText}).appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
