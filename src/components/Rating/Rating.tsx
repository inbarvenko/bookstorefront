import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Rating.styles';

type Props = {
  rate: number;
  bookPage?: boolean;
  size?: number;
};

const Rating = ({rate, bookPage, size}: Props) => {
  const [userRate, setUserRate] = useState(0);

  const rating = (num: number) => {
    const components = [];

    const end = bookPage ? userRate : Math.ceil(num);

    for (let i = 0; i < end; i++) {
      components.push(
        <TouchableOpacity key={i + end} onPress={() => setUserRate(i + 1)}>
          <Image
            key={i}
            style={styles.star}
            source={require('src/assets/img/Star.png')}
          />
        </TouchableOpacity>,
      );
    }

    if (!bookPage) {
      return components;
    }

    for (let j = userRate; j < num; j++) {
      components.push(
        <TouchableOpacity key={j + userRate} onPress={() => setUserRate(j + 1)}>
          <Image
            key={j}
            style={styles.star}
            source={require('src/assets/img/star_less.png')}
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
              source={require('src/assets/img/Star.png')}
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
          <Text style={[styles.text, styles.descr]}>Rate this book</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Rating;
