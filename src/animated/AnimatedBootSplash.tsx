import React from 'react';
import {Animated, Image} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';
import CustomTheme from 'src/theme';
import {images} from 'src/constants/images';
import {ImageRequireSource} from 'react-native';
import {Manifest, UseHideAnimationConfig} from 'react-native-bootsplash';

const AnimatedBootSplash: React.FC = () => {
  const opacity = useSharedValue(1);
  const changeOpasity = () => {
    opacity.value = withTiming(0, {
      duration: 2000,
      easing: Easing.linear,
    });
  };

  const config = {
    manifest: {
      background: CustomTheme.colors.light.light,
      logo: {
        width: 60,
        height: 100,
      },
    } as Manifest,
    logo: images.logo_white as ImageRequireSource,
    animate: changeOpasity,
  } as UseHideAnimationConfig;

  const {container, logo} = BootSplash.useHideAnimation(config);

  return (
    <Animated.View {...container} style={[container.style]}>
      <Image {...logo} style={logo.style} />
    </Animated.View>
  );
};

export default AnimatedBootSplash;
