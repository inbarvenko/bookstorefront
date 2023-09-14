import React, {useCallback, useState} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
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
      if (view.viewableItems![0]?.index) {
        setIndexState(view.viewableItems[0].index);
      } else {
        setIndexState(0);
      }
    },
    [],
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      position.value = indexState * 30 + (event.contentOffset.x % width) / 12;

      // console.log(indexState * 30, position.value);

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
          translateX: withSpring(position.value, {
            mass: 1,
            damping: 60,
            stiffness: 76,
            overshootClamping: false,
            restDisplacementThreshold: 5.43,
            restSpeedThreshold: 2,
          }),
        },
      ],
    };
  });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: scale.value,
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
        <Animated.View style={[styles.absoluteDot, scaleStyle, scrollStyle]} />
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
