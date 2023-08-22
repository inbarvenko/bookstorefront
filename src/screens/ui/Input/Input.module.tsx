import { StyleSheet } from 'react-native';
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
    backgroundColor: 'red',
    width: '80%',
    marginLeft: 16,
  },
  inputFocusStyle: {
    backgroundColor: CustomTheme.colors.light,
    borderColor: CustomTheme.colors.dark_blue,
    
  },
  containerPlaceholderFocus: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',
  },
  hintText: {
    marginTop: 5.61,
    fontSize: 12,
    fontFamily: 'Poppins400',
    paddingLeft: 10,
    color: CustomTheme.colors.dark_blue,
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default styles;