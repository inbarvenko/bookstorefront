import {StyleSheet} from 'react-native';
import CustomTheme from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '43%',
    height: 350,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  photo: {
    width: 150,
    height: 210,
    borderRadius: 16,

    alignSelf: 'center',
  },
  marginTop: {marginTop: 10},
  text: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    lineHeight: 21,
    paddingBottom: 3,
    paddingLeft: 5,

    height: 23,

    color: CustomTheme.colors.dark_blue,
  },
  text_container: {
    marginTop: 15,
    marginBottom: 7,
  },
});
