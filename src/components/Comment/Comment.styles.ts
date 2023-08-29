import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 15,

    backgroundColor: CustomTheme.colors.light,
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
    color: CustomTheme.colors.dark_grey,
  },
  username: {
    fontFamily: 'Poppins700',
    fontSize: 14,
    lineHeight: 21,

    color: CustomTheme.colors.dark_blue,
  },
  text: {
    lineHeight: 18,
    fontSize: 12,
    fontFamily: 'Poppins500',

    color: CustomTheme.colors.dark_blue,
  },
  text_container: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
});
