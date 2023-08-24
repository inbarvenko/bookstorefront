import {StyleSheet} from 'react-native';
import CustomTheme from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 650,
    marginTop: 70,

    backgroundColor: CustomTheme.colors.dark,

    paddingHorizontal: 15,
    paddingTop: 73,

    flexDirection: 'column',
    gap: 40,
  },
  logo: {
    width: 88,
    height: 46,
  },
  contact: {
    flexDirection: 'column',
    gap: 5,
  },
  navigation: {
    flexDirection: 'column',
    gap: 11,
  },
  container_map: {
    marginBottom: 30,
  },
  map_image: {
    alignSelf: 'center',
    width: '100%',
    height: 160,
  },
  text: {
    fontFamily: 'Poppins500',
    color: CustomTheme.colors.light,

    fontSize: 16,
  },
});
