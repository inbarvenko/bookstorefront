import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    width: '100%',
    height: 500,
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins700',
    fontSize: 18,
    color: CustomTheme.colors.dark,
  },
  text: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    color: CustomTheme.colors.dark_blue,
  },
  image: {
    borderRadius: 16,
    height: '100%',
    width: '90%',

    position: 'relative',
  },
  text_container: {
    position: 'absolute',
    left: 20,
    top: 20,
    right: 60,

    alignSelf: 'flex-start',
    flexDirection: 'column',
    gap: 20,

    marginHorizontal: 20,
    marginTop: 20,
  },
});
