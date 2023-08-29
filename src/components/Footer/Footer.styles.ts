import {StyleSheet} from 'react-native';
import CustomTheme from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 550,
    marginTop: 50,

    backgroundColor: CustomTheme.colors.dark,

    paddingHorizontal: 15,
    paddingTop: 50,

    flexDirection: 'column',
    gap: 30,
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
    gap: 8,
  },
  container_map: {
    marginBottom: 20,
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
