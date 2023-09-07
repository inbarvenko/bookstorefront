import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    back: {
      flex: 1,
      height: 60,

      backgroundColor: CustomTheme.colors[props.theme].light,

      bottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
      overflow: 'hidden',

      borderRadius: 50,
      borderWidth: 2,
    },
    circle: {
      width: 45,
      height: 45,
      borderRadius: 100,
      backgroundColor: CustomTheme.colors[props.theme].blob,
    },
    opasity: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slidingTab: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
