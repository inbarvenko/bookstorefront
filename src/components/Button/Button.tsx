import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import getStyle from './Button.styles';
import {useAppSelector} from 'src/redux/hooks';
import PoppinsText from '../PoppinsText/PoppinsText';

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
        <PoppinsText style={styles.appButtonText}>{title}</PoppinsText>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
