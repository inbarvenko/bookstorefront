import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {styles} from './PoppinsText.styles';
import {TextProps} from 'react-native';

type Props = {
  children: string | number;
  style?: StyleProp<TextStyle>;
} & TextProps;

const PoppinsText = (props: Props) => {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
};

export default PoppinsText;
