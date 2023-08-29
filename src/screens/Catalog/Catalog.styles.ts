import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  bookList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    fontFamily: 'Poppins700',
    margin: 15,
    fontSize: 18,
    lineHeight: 27,
    color: CustomTheme.colors.dark_blue,
  },
});
