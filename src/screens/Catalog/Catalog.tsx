import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
import BookCard from 'src/components/BookCard';
import {getStyle} from './Catalog.styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Banner from 'src/components/Banner';
import {StackNavigationProp} from '@react-navigation/stack';
import {getBooksRequest} from 'src/api/bookApi';
import {setBooks} from 'src/redux/slices/booksReducer';
import {cannotGetData} from 'src/utils/notifications';
import {images} from 'src/constants/images';
import {AuthStackParamList} from 'src/navigation/AuthStack';

const CatalogPage: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const bookList = useAppSelector(state => state.bookData.bookList);
  const userEmail = useAppSelector(state => state.userData.email);

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const route = useRoute();

  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const handleBooks = async () => {
    const data = await getBooksRequest({page: 1});

    if (!data) {
      cannotGetData('books');
    }
    dispatch(setBooks(data!));
  };

  useEffect(() => {
    try {
      handleBooks();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, bookList.length]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    const data = await getBooksRequest({page: 1});

    if (!data) {
      cannotGetData('books');
    }
    dispatch(setBooks(data!));

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, [dispatch]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.scroll}>
      <View style={styles.screenContainer}>
        <Banner
          back_image={images.catalog_banner}
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
            back_image={images.sing_in_banner}
            title="Authorize now"
            description="Authorize now and discover the fabulous world of books"
            button_title="Log In/ Sing Up"
            onButtonPress={() => navigation.navigate('SignIn')}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default CatalogPage;
