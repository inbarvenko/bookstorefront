import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';
import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: CustomTheme.colors[props.theme].background,
    },
    bookList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    screenContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'Poppins700',
      margin: 15,
      fontSize: 18,
      lineHeight: 27,
    },
  });
