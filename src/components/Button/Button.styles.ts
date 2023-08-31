import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';
import {Theme} from 'src/types/theme';

type Props = {
  fontSize?: number;
  width?: number;
  height?: number;
  colorText?: string;
  backColor?: string;
  theme: Theme;
};

const styles = (props: Props) =>
  StyleSheet.create({
    appButtonContainer: {
      backgroundColor: props.backColor
        ? props.backColor
        : CustomTheme.colors[props.theme.theme].dark_blue,
      borderRadius: 16,
      width: props.width,
      height: props.height,
      paddingVertical: 10,
    },
    appButtonText: {
      fontSize: props.fontSize,
      color: props.colorText,
      fontFamily: 'Poppins400',
      fontWeight: '500',
      alignSelf: 'center',
    },
  });

export default styles;
