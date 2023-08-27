import React, {useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './BookCard.module';
import {Book} from '../../../types';

import CustomTheme from '../../../theme';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type Props = {
  book: Book;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const BookCard = ({book, navigation}: Props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('Book', {bookId: book.id})}>
        <Image style={styles.photo} source={{uri: book.photoUrl}} />
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