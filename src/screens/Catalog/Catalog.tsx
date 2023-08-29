import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
import BookCard from 'src/components/BookCard';
import {styles} from './Catalog.styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Banner from 'src/components/Banner';
import {StackNavigationProp} from '@react-navigation/stack';
import {getBooksRequest} from 'src/api/bookApi';
import {setBooks} from 'src/redux/slices/booksReducer';

type RootStackParamList = {
  SignIn: undefined;
};

const CatalogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const bookList = useAppSelector(state => state.bookData.bookList);
  const userEmail = useAppSelector(state => state.userData.email);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  useEffect(() => {
    try {
      const res = getBooksRequest({page: 1});
      res.then(data => {
        if (!data) {
          return;
        }
        dispatch(setBooks(data));
      });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, bookList.length]);

  return (
    <ScrollView style={styles.screenContainer}>
      <Banner
        back_image={require('src/assets/img/catalog_banner.png')}
        title="Build your library with us"
        description="Buy two books and get one for free"
        button_title="Choose a book"
        onButtonPress={() => {}}
      />
      <Text style={styles.title}>Catalog</Text>
      <View style={styles.bookList}>
        {bookList.length > 0 &&
          bookList.map(item => {
            return (
              <BookCard
                key={item.author + item.name + route.name}
                book={item}
              />
            );
          })}
      </View>
      {!userEmail && (
        <Banner
          back_image={require('src/assets/img/sing_in_banner.png')}
          title="Authorize now"
          description="Authorize now and discover the fabulous world of books"
          button_title="Log In/ Sing Up"
          onButtonPress={() => navigation.navigate('SignIn')}
        />
      )}
    </ScrollView>
  );
};

export default CatalogPage;
