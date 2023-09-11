import React from 'react';
import {Dimensions} from 'react-native';
import {OnboardingDataType} from 'src/constants/onboarding/data';
import {getStyle} from './Onboarding.styles';
import PoppinsText from 'src/components/PoppinsText/PoppinsText';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

type Props = {
  item: OnboardingDataType;
};

const OnboardingItem = ({item}: Props) => {
  const width = Dimensions.get('window').width;
  const styles = getStyle({screenWidth: width});
  const rotationAngle = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange(event => {
      console.log('rotationAngle.value', rotationAngle.value);
      rotationAngle.value += interpolate(
        event.changeX,
        [-360, 360],
        [-90, 90],
        {extrapolateRight: Extrapolation.CLAMP},
      );
    })
    .onFinalize(event => {
      rotationAngle.value = withDecay({
        velocity: event.velocityY,
      });
      console.log('rotationAngle.value', rotationAngle.value);
    });

  const rotatedStyle = useAnimatedStyle(() => {
    console.log();
    return {
      transform: [{perspective: 850}, {rotateY: `${rotationAngle.value}deg`}],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={styles.container}>
        <PoppinsText style={styles.title}>{item.title}</PoppinsText>
        <Animated.Image
          style={[styles.image, rotatedStyle]}
          source={item.image}
        />
        <PoppinsText style={styles.text}>{item.descr}</PoppinsText>
      </Animated.View>
    </GestureDetector>
  );
};

export default OnboardingItem;
