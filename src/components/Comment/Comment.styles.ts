import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 15,
      padding: 15,

      backgroundColor: CustomTheme.colors[props.theme].light,
      flexDirection: 'column',
      justifyContent: 'space-around',

      borderRadius: 16,
    },
    title: {
      flexDirection: 'row',
      justifyContent: 'flex-start',

      paddingBottom: 10,
    },
    img: {
      height: 35,
      width: 35,

      borderRadius: 50,
    },
    date: {
      fontSize: 12,
      color: CustomTheme.colors[props.theme].dark_grey,
    },
    username: {
      fontFamily: 'Poppins700',
      lineHeight: 21,

      color: CustomTheme.colors[props.theme].dark_blue,
    },
    text: {
      lineHeight: 18,
      fontSize: 12,

      color: CustomTheme.colors[props.theme].dark_blue,
    },
    text_container: {
      flexDirection: 'column',
      paddingLeft: 20,
    },
  });
