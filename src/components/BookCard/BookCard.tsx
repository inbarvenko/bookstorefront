import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './BookCard.styles';
import CustomTheme from '@/theme';
import Rating from '@/components/Rating/Rating';
import Button from '@/components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Book} from '@/types';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  book: Book;
};

type RootStackParamList = {
  Book: {bookId: string} | undefined;
};

const BookCard: React.FC<Props> = ({book}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Book', {bookId: book.id})}>
        <Image style={styles.photo} source={{uri: book.photoUrl}} />
        <View style={styles.text_container}>
          <Text style={styles.text}>{book.name}</Text>
          <Text style={[styles.text, {color: CustomTheme.colors.dark_grey}]}>
            {book.author}
          </Text>
        </View>
        <Rating size={103} rate={book.rate || 0} />
        <Button
          styleButton={styles.marginTop}
          title={'$ ' + book.price + ' URD'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;
