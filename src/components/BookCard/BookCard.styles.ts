import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    container: {
      width: '43%',
      height: 350,
      marginVertical: 20,
      marginHorizontal: 10,
    },
    photo: {
      width: 150,
      height: 210,
      borderRadius: 16,

      alignSelf: 'center',
    },
    like_container: {
      position: 'absolute',
      left: 19,
      top: 16,

      width: 40,
      height: 40,
    },
    like: {
      width: 25,
      height: 25,
    },
    marginTop: {marginTop: 10},
    text: {
      fontFamily: 'Poppins500',
      fontSize: 14,
      lineHeight: 21,
      paddingBottom: 3,
      paddingLeft: 5,

      height: 23,

      color: CustomTheme.colors[props.theme].dark_blue,
    },
    text_container: {
      marginTop: 15,
      marginBottom: 7,
    },
  });
