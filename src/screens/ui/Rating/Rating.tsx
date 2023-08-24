import React from 'react';
import {Image, Text, View} from 'react-native';
import { styles } from './Rating.module';

type Props = {
  rate: number;
};

const Rating = ({rate}: Props) => {
  const components = [];

  for (let i = 0; i < Math.ceil(rate); i++) {
    components.push(
      <Image 
      style={styles.star}
      source={require('../../../../assets/img/Star.png')} />,
    );
  }

  return (
    <View style={styles.rating}>
      <View style={styles.container}>{components}</View>
      <Text style={styles.text}>{rate}</Text>
    </View>
  );
};

export default Rating;
