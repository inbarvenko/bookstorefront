import {StyleSheet} from 'react-native';
import CustomTheme from '../../../theme';

export const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  container: {
    width: 103,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    color: CustomTheme.colors.dark_grey,
  },
  star:{
    width: 15,
    height: 15,
  }
});
