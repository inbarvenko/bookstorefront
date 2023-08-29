import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {styles} from './Favorites.module';
import Button from '../ui/Button/Button';
import CustomTheme from '../../theme';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const FavoritesPage: React.FC<Props> = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Your favorites is empty</Text>
          <Text style={styles.text}>
            Add items to your favorites to save them for future. Go to the
            catalogue now.
          </Text>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to catalog"
            colorText={CustomTheme.colors.light}
          />
        </View>
        <Image
          style={[styles.img, styles.big_img]}
          source={require('../../../assets/img/books_fav.png')}
        />
      </View>
    </ScrollView>
  );
};

export default FavoritesPage;