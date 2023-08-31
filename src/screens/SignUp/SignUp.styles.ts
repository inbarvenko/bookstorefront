import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    flex: {flex: 1},
    screenContainer: {
      paddingTop: 40,

      flex: 1,
      flexDirection: 'column',

      backgroundColor: CustomTheme.colors[props.theme].background,
    },
    buttonContainer: {
      marginHorizontal: 15,
      marginVertical: 40.25,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },

    titleStyle: {
      fontFamily: 'Poppins700',
      fontSize: 18,
      lineHeight: 27,
      paddingStart: 15,
      color: CustomTheme.colors[props.theme].dark_blue,

      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 30,
    },

    errorTextStyle: {
      color: CustomTheme.colors[props.theme].error_dark,
    },
    errorSectionStyle: {
      borderColor: CustomTheme.colors[props.theme].error_dark,
      backgroundColor: CustomTheme.colors[props.theme].error_light,
      opacity: 0.8,
    },
    inputContainer: {
      marginBottom: 44,
      height: 64,
      paddingHorizontal: 15,
    },
    inputText: {
      fontSize: 14,
      fontFamily: 'Poppins400',
      letterSpacing: 0.75,
      color: CustomTheme.colors[props.theme].dark_blue,
      paddingBottom: 7,
    },
    buttonsSection: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    image: {
      width: 290,
      height: 247,
      marginHorizontal: 15,
      alignSelf: 'center',
    },
  });

export default getStyle;
