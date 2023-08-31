import {StyleSheet} from 'react-native';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    container: {
      height: 35,
      width: 35,
      alignSelf: 'center',
    },
  });
