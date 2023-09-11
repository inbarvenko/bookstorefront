import React, {useCallback, useState} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
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
import Pagination from './Pagination';
import CustomTheme from 'src/theme';

const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const {width} = useWindowDimensions();
  const flatListRef = useAnimatedRef<FlatList<OnboardingDataType>>();
  const flatListIndex = useSharedValue(0);
  const x = useSharedValue(0);
  const imageRotation = useSharedValue(0);
  const [indexState, setIndexState] = useState(0);

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
      x.value = event.contentOffset.x;

      imageRotation.value = interpolate(
        event.contentOffset.x % width,
        [0, 360],
        [0, 45],
        Extrapolation.CLAMP,
      );
    },
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
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <Pagination activeIndex={indexState} data={onboardingData} />
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
