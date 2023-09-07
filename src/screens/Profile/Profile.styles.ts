import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      flexDirection: 'column',

      padding: 15,
      paddingTop: 30,
      height: '100%',
    },
    images: {
      marginBottom: 20,
    },
    scroll: {
      flex: 1,
      backgroundColor: CustomTheme.colors[props.theme].background,
    },
    row: {
      width: '100%',
      paddingTop: 15,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    photo: {
      width: 310,
      height: 310,

      borderRadius: 16,

      alignSelf: 'center',
    },
    photo_button: {
      width: 40,
      height: 40,
    },
    photo_button_container: {
      position: 'absolute',
      right: 25,
      bottom: 10,

      width: 60,
      height: 60,
    },
    title: {
      fontFamily: 'Poppins700',
      fontSize: 18,
      paddingBottom: 10,
    },
    text_link: {
      color: CustomTheme.colors[props.theme].dark_green,
      fontFamily: 'Poppins400',
      textDecorationLine: 'underline',
      fontSize: 12,
      paddingBottom: 5,
    },
    inputContainer: {
      marginBottom: 10,
      height: 64,
    },
    passwordContainer: {
      marginBottom: 60,
      alignItems: 'flex-start',
    },
    inputText: {
      letterSpacing: 0.75,
      paddingBottom: 7,
    },
    image: {
      width: 290,
      height: 247,
      marginHorizontal: 15,
      alignSelf: 'center',
    },
  });
