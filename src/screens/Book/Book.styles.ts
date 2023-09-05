import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: CustomTheme.colors[props.theme].background,
    },
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
    paddingBottom: {
      paddingHorizontal: 15,
      paddingBottom: 15,
    },
    paddings: {paddingLeft: 15, paddingTop: 30},
    input: {
      height: 100,
      textAlignVertical: 'top',

      backgroundColor: CustomTheme.colors[props.theme].light,
      marginBottom: 20,

      borderRadius: 16,
    },
    favoritebook: {
      marginVertical: 10,
      marginHorizontal: 15,

      borderRadius: 16,
    },
    inputText: {
      fontFamily: 'Poppins400',
      color: CustomTheme.colors[props.theme].dark_blue,
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
      color: CustomTheme.colors[props.theme].dark_blue,
      fontFamily: 'Poppins700',
      fontSize: 20,

      paddingBottom: 7,
    },
    bookList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    author: {
      color: CustomTheme.colors[props.theme].dark_blue,
      fontFamily: 'Poppins500',
      fontSize: 14,
      width: '50%',

      paddingBottom: 20,
    },
    descr_container: {},
    descr_title: {
      fontFamily: 'Poppins500',
      fontSize: 16,
      color: CustomTheme.colors[props.theme].dark_blue,
      paddingBottom: 10,
    },
    descr_text: {
      fontFamily: 'Poppins500',
      color: CustomTheme.colors[props.theme].dark_blue,
      fontSize: 14,
    },
  });
