import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Favorites.styles';
import Button from 'src/components/Button';
import CustomTheme from 'src/theme';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

const FavoritesPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
          source={require('src/assets/img/books_fav.png')}
        />
      </View>
    </ScrollView>
  );
};

export default FavoritesPage;
