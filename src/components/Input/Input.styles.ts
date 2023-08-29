import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

const styles = StyleSheet.create({
  inputRowContainer: {
    backgroundColor: CustomTheme.colors.light,
    flexDirection: 'row',
    height: '100%',

    paddingLeft: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: CustomTheme.colors.light,
  },
  inputStyle: {
    fontFamily: 'Poppins400',
    width: '100%',
    marginLeft: 16,
  },
  inputFocusStyle: {
    backgroundColor: CustomTheme.colors.light,
    borderColor: CustomTheme.colors.dark_blue,
  },
  containerPlaceholderFocus: {
    flex: 1,
    flexDirection: 'column',
  },
  hintText: {
    color: CustomTheme.colors.dark_blue,

    marginTop: 5.61,
    fontSize: 12,
    fontFamily: 'Poppins500',
    paddingLeft: 10,
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
    width: 24,
    height: 22,
  },
  textInput: {
    fontSize: 12,
    paddingVertical: 0,
    height: '50%',
  },
  border: {
    borderColor: CustomTheme.colors.dark_grey,
    borderWidth: 2,
  },
  fullHeight: {height: '100%'},
  fullWidth: {width: '100%'},
  paddings: {paddingTop: 20, paddingLeft: 24},
});

export default styles;
