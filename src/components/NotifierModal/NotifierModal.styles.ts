import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  modal: {
    borderRadius: 16,
  },
  container: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: CustomTheme.colors['light'].dark_green,
  },
  title: {
    padding: 15,
    fontFamily: 'Poppins700',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    paddingBottom: 10,
  },
  description: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    fontFamily: 'Poppins500',
    fontSize: 14,
    alignSelf: 'center',
  },
});
