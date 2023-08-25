import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './BookCard.module';
import {Book} from '../../../types';

import CustomTheme from '../../../theme';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import { getBookPhotoRequest } from '../../../api/bookApi';


type Props = {
  book: Book;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const BookCard = ({book, navigation}: Props) => {
  const [photo, setPhoto] = useState('https://jtkobqcwwujbjmnyxwwy.supabase.co/storage/v1/object/public/books/photos/Angela%20Carter%20Fairy%20Tales.jpg?t=2023-08-25T13%3A23%3A46.024Z')

  const parsePhoto = (data: Blob) => {
    const fr = new FileReader();
    fr.readAsDataURL(data);
    fr.onload = () => {
      setPhoto(fr.result as string)
    };
  }

  useEffect(() => {
    getBookPhotoRequest({book: book, parseBlob: parsePhoto})
  }, []);


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Book', {bookId: book.id, bookPhoto: photo})}>
        <Image style={styles.photo} source={{uri: photo}} />
        <View style={styles.text_container}>
          <Text style={styles.text}>{book.name}</Text>
          <Text style={[styles.text, {color: CustomTheme.colors.dark_grey}]}>
            {book.author}
          </Text>
        </View>
        <Rating size={103} rate={book.rate || 0} />
        <Button styleButton={{marginTop: 10}} title={'$ ' + book.price + ' URD'} />
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;
