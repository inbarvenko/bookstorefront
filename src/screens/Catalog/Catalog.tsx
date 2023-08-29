import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getAllBooks} from '@/redux/slices/booksReducer';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import BookCard from '@/components/BookCard/BookCard';
import {styles} from './Catalog.styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Banner from '@/components/Banner/Banner';
import {StackNavigationProp} from '@react-navigation/stack';

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
    dispatch(getAllBooks({page: 1}));
  }, [dispatch]);

  return (
    <ScrollView style={styles.screenContainer}>
      <Banner
        back_image={require('+/catalog_banner.png')}
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
          back_image={require('+/sing_in_banner.png')}
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
