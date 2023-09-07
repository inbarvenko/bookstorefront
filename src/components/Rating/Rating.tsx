import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {getStyle} from './Rating.styles';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';
import PoppinsText from '../PoppinsText/PoppinsText';

type Props = {
  rate: number;
  bookPage?: boolean;
  size?: number;
};

const Rating = ({rate, bookPage, size}: Props) => {
  const [userRate, setUserRate] = useState(0);
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const rating = (num: number) => {
    const components = [];

    const end = bookPage ? userRate : Math.ceil(num);

    for (let i = 0; i < end; i++) {
      components.push(
        <TouchableOpacity key={i + end} onPress={() => setUserRate(i + 1)}>
          <Image key={i} style={styles.star} source={images.star} />
        </TouchableOpacity>,
      );
    }

    if (!bookPage) {
      return components;
    }

    for (let j = userRate; j < num; j++) {
      components.push(
        <TouchableOpacity key={j + userRate} onPress={() => setUserRate(j + 1)}>
          <Image key={j} style={styles.star} source={images.star_less} />
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
            <Image style={styles.star} source={images.star} />
          ) : (
            rating(rate)
          )}
        </View>
        <PoppinsText style={styles.text}>{rate}</PoppinsText>
      </View>
      {bookPage ? (
        <View style={styles.user_rate}>
          <View style={[styles.container, !bookPage ? null : {width: size}]}>
            {rating(5)}
          </View>
          <PoppinsText style={[styles.text, styles.descr]}>
            Rate this book
          </PoppinsText>
        </View>
      ) : null}
    </View>
  );
};

export default Rating;
