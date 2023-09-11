import {View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {OnboardingDataType} from 'src/constants/onboarding/data';
import {styles} from './Onboarding.styles';

type Props = {
  data: OnboardingDataType[];
  activeIndex: number;
};
const Pagination = ({data, activeIndex}: Props) => {
  const width = useSharedValue(10);

  width.value = withSpring(
    20,
    {
      mass: 1,
      damping: 37,
      stiffness: 366,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    },
    () => {
      width.value = withSpring(10, {
        mass: 1,
        damping: 37,
        stiffness: 366,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
    },
  );

  const scrollStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(30 * activeIndex, {
            mass: 1,
            damping: 60,
            stiffness: 76,
            overshootClamping: false,
            restDisplacementThreshold: 5.43,
            restSpeedThreshold: 2,
          }),
        },
      ],
      width: width.value,
    };
  });

  return (
    <View style={styles.paginationContainer}>
      {data.map((item, index) => {
        return <View style={styles.dots} key={index} />;
      })}
      <Animated.View style={[styles.absoluteDot, scrollStyle]} />
    </View>
  );
};

export default Pagination;
