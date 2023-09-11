import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: CustomTheme.colors[props.theme].background,
    },
    screenContainer: {
      flex: 1,
      flexDirection: 'column',

      padding: 15,
      paddingTop: 30,
      height: '100%',
    },
    text: {
      fontFamily: 'Poppins500',
      fontSize: 12,
      lineHeight: 18,
      width: 240,
    },
    textTitle: {
      fontFamily: 'Poppins700',
      fontSize: 18,
      lineHeight: 21,
    },
    titleContainer: {
      gap: 20,
      paddingBottom: 40,
    },
    img: {
      width: 290,
      height: 176,

      alignSelf: 'center',
    },
  });
