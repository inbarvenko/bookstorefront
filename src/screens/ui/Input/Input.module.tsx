import {StyleSheet} from 'react-native';
import CustomTheme from '../../../theme';

const styles = StyleSheet.create({
  inputRowContainer: {
    backgroundColor: 'rgba(240, 244, 239, 1)',
    flexDirection: 'row',
    paddingLeft: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: CustomTheme.colors.light,
  },
  inputStyle: {
    // backgroundColor: 'red',
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
    // backgroundColor: 'green',
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
});

export default styles;
