import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 15,
    width: '100%',
    height: 115,

    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  container: {
    paddingBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 62,
    height: 31,
  },
  catalog: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(0, 0, 0, 1)',
  },
  button: {
    height: 32,
    width: 32,
  },
  rightButtons: {
    height: 33,
    width: 135,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
