import {StyleSheet} from 'react-native';
import CustomTheme from '../../theme';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginVertical: 40.25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  
  titleStyle: {
    fontFamily: 'Poppins700',
    fontSize: 18,
    lineHeight: 27,
    paddingStart: 15,
    color: CustomTheme.colors.dark_blue,

    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },

  errorTextStyle: {
    color: CustomTheme.colors.error_dark,
  },
  errorSectionStyle: {
    borderColor: CustomTheme.colors.error_dark,
    backgroundColor: CustomTheme.colors.error_light,
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 44,
    // width: 290,
    height: 48,
    paddingHorizontal: 15,
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
  }
});

export default styles;
