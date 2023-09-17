import React, {useCallback, useState} from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import onboardingData, {
  OnboardingDataType,
} from 'src/constants/onboarding/data';
import OnboardingItem from './OnboardingItem';
import {FlatList, View, ViewToken, useWindowDimensions} from 'react-native';
import Button from 'src/components/Button/Button';
import {useNavigation} from '@react-navigation/core';

import {AppStackParamList} from 'src/navigation/AppStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {getStyle} from './Onboarding.styles';
import CustomTheme from 'src/theme';

const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const {width} = useWindowDimensions();
  const flatListRef = useAnimatedRef<FlatList<OnboardingDataType>>();
  const flatListIndex = useSharedValue(0);
  const position = useSharedValue(0);
  const imageRotation = useSharedValue(0);
  const [indexState, setIndexState] = useState(0);
  const scale = useSharedValue(0);

  const changePage = () => {
    if (indexState >= 2) {
      return navigation.navigate('Tab');
    }
    flatListRef.current?.scrollToIndex({index: indexState + 1});
  };

  const onPageChangeIndex = useCallback(
    (view: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      console.log(view.viewableItems![0]);
      if (view.viewableItems![0]?.index !== null) {
        setIndexState(view.viewableItems[0].index);
      }
    },
    [],
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      console.log(indexState);
      position.value = interpolate(event.contentOffset.x, [0, 720], [0, 60]);
      scale.value = interpolate(event.contentOffset.x % 180, [0, 180], [1, 4]);

      imageRotation.value = interpolate(
        event.contentOffset.x % width,
        [0, 360],
        [0, 45],
        Extrapolation.CLAMP,
      );
    },
  });

  const scrollStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(position.value, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
        {
          scaleX: withTiming(scale.value, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  const styles = getStyle({screenWidth: width});

  return (
    <View style={styles.screenContainer}>
      <Button
        styleButton={styles.skipButton}
        width={100}
        backColor={CustomTheme.colors.light.dark_green}
        colorText={CustomTheme.colors.light.light}
        title="Skip"
        onPress={() => navigation.push('Tab')}
      />
      <Animated.FlatList
        data={onboardingData}
        renderItem={({item, index}) => {
          return (
            <OnboardingItem
              index={index}
              activeIndex={indexState}
              angle={imageRotation}
              key={Math.random() + index}
              item={item}
            />
          );
        }}
        ref={flatListRef}
        onScroll={onScroll}
        onViewableItemsChanged={onPageChangeIndex}
        horizontal
        pagingEnabled
        bounces={false}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.paginationContainer}>
        {onboardingData.map((item, index) => {
          return <View style={styles.dots} key={index} />;
        })}
        <Animated.View style={[styles.absoluteDot, scrollStyle]} />
      </View>
      <Button
        onPress={changePage}
        styleButton={styles.button}
        width={250}
        title={
          flatListIndex.value !== onboardingData.length - 1
            ? 'Next'
            : 'Continue'
        }
      />
    </View>
  );
};

export default OnboardingScreen;
