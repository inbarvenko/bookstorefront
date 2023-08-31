import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getStyle} from './Favorites.styles';
import Button from 'src/components/Button';
import CustomTheme from 'src/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';
import {TabParamList} from 'src/navigation/TabNavigation';

const FavoritesPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<TabParamList>>();
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

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
            onPress={() => navigation.navigate('Catalog')}
            title="Go to catalog"
            colorText={CustomTheme.colors[theme].light}
          />
        </View>
        <Image
          style={[styles.img, styles.big_img]}
          source={images.books_favorite}
        />
      </View>
    </ScrollView>
  );
};

export default FavoritesPage;
