import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {getAllBooks} from '../../redux/booksReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import BookCard from '../ui/BookCard/BookCard';
import {styles} from './Catalog.module';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import Banner from '../ui/Banner/Banner';
import Footer from '../ui/Footer/Footer';
import { getBookPhotoRequest } from '../../api/bookApi';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const CatalogPage: React.FC<Props> = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const bookList = useAppSelector(state => state.bookData.bookList);
  const userEmail = useAppSelector(state => state.userData.email);

  useEffect(() => {
    dispatch(getAllBooks({page: 1}));
  }, []);


  return (
    <ScrollView style={styles.screenContainer}>
      <Banner
        back_image={require('../../../assets/img/catalog_banner.png')}
        title="Build your library with us"
        description="Buy two books and get one for free"
        button_title="Choose a book"
        onButtonPress={() => {}}
      />
      <View style={styles.bookList}>
        {bookList.map(item => {
          return <BookCard key={item.author + item.name} book={item} navigation={navigation}/>;
        })}
      </View>
      {!userEmail && (
        <Banner
          back_image={require('../../../assets/img/sing_in_banner.png')}
          title="Authorize now"
          description="Authorize now and discover the fabulous world of books"
          button_title="Log In/ Sing Up"
          onButtonPress={() => navigation.navigate('SignIn')}
        />
      )}
      <Footer navigation={navigation} />
    </ScrollView>
  );
};

export default CatalogPage;
