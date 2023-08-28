import {StyleSheet} from 'react-native';
import CustomTheme from '../../theme';

export const styles = StyleSheet.create({
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
    color: CustomTheme.colors.dark_blue,
    lineHeight: 18,
    width: 310,
  },
  textTitle: {
    fontFamily: 'Poppins700',
    fontSize: 18,
    color: CustomTheme.colors.dark_blue,
    lineHeight: 21
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
