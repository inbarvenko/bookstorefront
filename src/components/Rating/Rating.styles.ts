import {StyleSheet} from 'react-native';
import CustomTheme from '@/theme';

export const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    color: CustomTheme.colors.dark_grey,

    paddingLeft: 12,
  },
  star: {
    width: 15,
    height: 15,
  },
  descr: {fontSize: 14, paddingTop: 9, paddingLeft: 0},
  user_rate: {
    paddingTop: 15,
  },
});
