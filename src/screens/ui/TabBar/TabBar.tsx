import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './TabBar.module';
import {useAppSelector} from '../../../redux/hooks';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const index = state.index;
  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <View style={styles.back}>
      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={(index === 0) ? {selected: true} : {}}
        onPress={() => navigation.navigate('Catalog')}>
        <Image
          source={(index === 0) ? require('../../../../assets/img/fill_home.png') : require('../../../../assets/img/Home.png')}
          style={[{width: 25, height: 27}]}
        />
      </TouchableOpacity>
      {userEmail && (
        <TouchableOpacity
          style={styles.opasity}
          accessibilityRole="button"
          accessibilityState={(index === 3) ? {selected: true} : {}}
          onPress={() => navigation.navigate('Busket')}>
          <Image
            source={(index === 3) ? require('../../../../assets/img/fill_cart.png') : require('../../../../assets/img/Cart.png')}
            style={[styles.img]}
          />
        </TouchableOpacity>
      )}

      {userEmail && <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={(index === 2) ? {selected: true} : {}}
        onPress={() => navigation.navigate('Favorites')}>
        <Image
          source={(index === 2) ? require('../../../../assets/img/fill_heart.png') : require('../../../../assets/img/Union.png')}
          style={styles.img}
        />
      </TouchableOpacity>}

      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={(index === 1) ? {selected: true} : {}}
        onPress={() => navigation.navigate(userEmail ? 'Profile' : 'Auth' )}>
        <Image
          source={(index === 1) ? require('../../../../assets/img/fill_userprofile.png') : require('../../../../assets/img/blue_userprofile.png')}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
