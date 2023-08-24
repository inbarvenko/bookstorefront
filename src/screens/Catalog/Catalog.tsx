import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {getAllBooks} from '../../redux/booksReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import BookCard from '../ui/BookCard/BookCard';
import { styles } from './Catalog.module';

interface Props {
  navigation: any;
}

const CatalogPage: React.FC<Props> = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const bookList = useAppSelector((state) => state.bookData.bookList)

  useEffect(() => {
    dispatch(getAllBooks({page: 1}));
  }, []);

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <View style={styles.bookList}>
      {bookList.map((item) => {
        return (
          <BookCard 
          key={item.author + item.name}
          book={item}/>
        )
      })}
      </View>
    </ScrollView>
  );
};

export default CatalogPage;
