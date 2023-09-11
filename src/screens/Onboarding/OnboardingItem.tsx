import React from 'react';
import {Dimensions} from 'react-native';
import {OnboardingDataType} from 'src/constants/onboarding/data';
import {getStyle} from './Onboarding.styles';
import PoppinsText from 'src/components/PoppinsText/PoppinsText';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  item: OnboardingDataType;
  angle: SharedValue<number>;
  index: number;
  activeIndex: number;
};

const OnboardingItem = ({item, angle, index, activeIndex}: Props) => {
  const width = Dimensions.get('window').width;
  const styles = getStyle({screenWidth: width});

  const rotatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: withSpring(
            index === activeIndex ? `${angle.value}deg` : `-${angle.value}deg`,
            {
              mass: 7.1,
              damping: 64,
              stiffness: 150,
              overshootClamping: true,
              restDisplacementThreshold: 26.66,
              restSpeedThreshold: 81.84,
            },
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={styles.container}>
      <PoppinsText style={styles.title}>{item.title}</PoppinsText>
      <Animated.Image
        style={[styles.image, rotatedStyle]}
        source={item.image}
      />
      <PoppinsText style={styles.text}>{item.descr}</PoppinsText>
    </Animated.View>
  );
};

export default OnboardingItem;
