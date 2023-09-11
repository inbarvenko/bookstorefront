import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {getStyles} from './PoppinsText.styles';
import {TextProps} from 'react-native';
import {useAppSelector} from 'src/redux/hooks';

type Props = {
  children: string | number;
  style?: StyleProp<TextStyle>;
} & TextProps;

const PoppinsText = (props: Props) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyles({theme});
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
};

export default PoppinsText;
