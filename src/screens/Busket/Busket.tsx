import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getStyle} from './Busket.styles';
import Button from 'src/components/Button';
import CustomTheme from 'src/theme';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabParamList} from 'src/navigation/TabNavigation';

const BusketPage: React.FC = () => {
  const theme = useAppSelector(state => state.appData.theme);
  const navigation = useNavigation<StackNavigationProp<TabParamList>>();
  const styles = getStyle({theme});

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Your cart is empty</Text>
          <Text style={styles.text}>
            Add items to cart to make a purchase. Go to the catalogue now.
          </Text>
          <Button
            onPress={() => navigation.navigate('Catalog')}
            title="Go to catalog"
            colorText={CustomTheme.colors[theme].light}
          />
        </View>
        <Image style={styles.img} source={images.books} />
      </View>
    </ScrollView>
  );
};

export default BusketPage;
