import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';
import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    flex: {flex: 1},
    screenContainer: {
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
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
    buttonsSection: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    titleStyle: {
      fontFamily: 'Poppins700',
      fontSize: 18,
      lineHeight: 27,
      paddingStart: 15,
      paddingTop: 30,

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

export default getStyle;
