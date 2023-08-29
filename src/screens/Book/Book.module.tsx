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
  variants_container: {
    paddingHorizontal: 15,
    paddingVertical: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  input: {
    height: 100,
    textAlignVertical: 'top',

    backgroundColor: CustomTheme.colors.light,
    marginBottom: 20,

    borderRadius: 16,
  },
  favoritebook: {

  },
  inputText: {
    fontFamily: 'Poppins400',
    color: CustomTheme.colors.dark_blue,
  },
  photo: {
    width: '45%',
    height: 230,
  },
  text_box: {
    flexDirection: 'column',
    width: '50%',

    paddingLeft: 20,
  },
  title_book: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  name: {
    color: CustomTheme.colors.dark_blue,
    fontFamily: 'Poppins700',
    fontSize: 20,

    // backgroundColor: 'red',

    paddingBottom: 7,
  },
  bookList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  author: {
    color: CustomTheme.colors.dark_blue,
    fontFamily: 'Poppins500',
    fontSize: 14,
    width: '50%',

    paddingBottom: 20,
  },
  descr_container: {
    // backgroundColor: 'red',
  },
  descr_title: {
    fontFamily: 'Poppins500',
    fontSize: 16,
    color: CustomTheme.colors.dark_blue,
    paddingBottom: 10,
  },
  descr_text: {
    fontFamily: 'Poppins500',
    color: CustomTheme.colors.dark_blue,
    fontSize: 14,
  },
});
