import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    backgroundColor: CustomTheme.colors['light'].dark_green,
  },
  circle: {
    backgroundColor: CustomTheme.colors['light'].light,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: 'black',

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 15,
    fontFamily: 'Poppins700',
    fontSize: 18,
    alignSelf: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
