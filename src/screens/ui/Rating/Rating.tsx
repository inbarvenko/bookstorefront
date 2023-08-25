import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Rating.module';

type Props = {
  rate: number;
  bookPage?: boolean;
  size?: number;
};

const Rating = ({rate, bookPage, size}: Props) => {
  const [userRate, setUserRate] = useState(0);
  // console.log(userRate);

  const rating = (num: number) => {
    const components = [];

    // console.log(num)

    const end = bookPage ? userRate : Math.ceil(num);

    for (let i = 0; i < end; i++) {
      // console.log('i', i);
      components.push(
        <TouchableOpacity onPress={() => setUserRate(i + 1)}>
          <Image
            key={i}
            style={styles.star}
            source={require('../../../../assets/img/Star.png')}
          />
        </TouchableOpacity>,
      );
    }

    if (!bookPage) {
      return components;
    }

    for (let j = userRate; j < num; j++) {
      components.push(
        <TouchableOpacity onPress={() => setUserRate(j + 1)}>
          <Image
            key={j}
            style={styles.star}
            source={require('../../../../assets/img/star_less.png')}
          />
        </TouchableOpacity>,
      );
    }

    return components;
  };

  return (
    <View>
      <View style={styles.rating}>
        <View style={[styles.container, bookPage ? null : {width: size}]}>
          {bookPage ? (
            <Image
              style={styles.star}
              source={require('../../../../assets/img/Star.png')}
            />
          ) : (
            rating(rate)
          )}
        </View>
        <Text style={styles.text}>{rate}</Text>
      </View>
      {bookPage ? (
        <View style={styles.user_rate}>
          <View style={[styles.container, !bookPage ? null : {width: size}]}>
            {rating(5)}
          </View>
          <Text
            style={[
              styles.text,
              {fontSize: 14, paddingTop: 9, paddingLeft: 0},
            ]}>
            Rate this book
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Rating;
