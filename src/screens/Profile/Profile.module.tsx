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
  images: {
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  photo: {
    width: '100%',
    height: 310,

    borderRadius: 16,

    alignSelf: 'center',
  },
  photo_button: {
    width: 40,
    height: 40,
  },
  photo_button_container: {
    position: 'absolute',
    right: 25,
    bottom: 10,

    width: 60,
    height: 60,
  },
  title: {
    color: CustomTheme.colors.dark_blue,
    fontFamily: 'Poppins700',
    fontSize: 18,
    paddingBottom: 10,
  },
  text_link: {
    color: CustomTheme.colors.dark_green,
    fontFamily: 'Poppins400',
    textDecorationLine: 'underline',
    fontSize: 12,
    paddingBottom: 5,
  },
  inputContainer: {
    marginBottom: 10,
    height: 64,
    // paddingHorizontal: 15,
  },
  inputText: {
    fontSize: 14,
    fontFamily: 'Poppins400',
    letterSpacing: 0.75,
    color: CustomTheme.colors.dark_blue,
    paddingBottom: 7,
  },
  image: {
    width: 290,
    height: 247,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
});
