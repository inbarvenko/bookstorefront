import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

type Props = {
  screenWidth: number;
};

export const getStyle = ({screenWidth}: Props) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: CustomTheme.colors.light.background,
      paddingVertical: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    container: {
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'Poppins700',
      fontSize: 18,
      paddingBottom: 15,
      paddingTop: 30,
      textAlign: 'center',
      paddingHorizontal: 10,
    },
    text: {
      paddingTop: 15,
      paddingHorizontal: 15,
      fontSize: 16,
    },
    image: {
      alignSelf: 'center',
      objectFit: 'scale-down',
      height: 300,
    },
    button: {
      alignSelf: 'center',
      justifyContent: 'center',
      color: CustomTheme.colors.light.light,
    },
    skipButton: {
      alignSelf: 'flex-end',
      marginHorizontal: 15,
    },
    dots: {
      backgroundColor: CustomTheme.colors.light.dark_grey,
      height: 10,
      width: 10,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    absoluteDot: {
      left: 10,
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: CustomTheme.colors.light.dark_green,
      position: 'absolute',
      alignSelf: 'center',
    },
    paginationContainer: {
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
