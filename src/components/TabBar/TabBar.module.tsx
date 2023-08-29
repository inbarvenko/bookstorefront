import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  back: {
    width: '100%',
    height: 60,

    backgroundColor: CustomTheme.colors.light,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    borderTopColor: CustomTheme.colors.dark_blue,
    borderTopWidth: 2,
    padding: 10,
  },
  imageHome: {width: 25, height: 27},
  img: {
    height: 26,
    width: 29,
  },
  opasity: {
    height: 35,
    width: 38,
  },
});
