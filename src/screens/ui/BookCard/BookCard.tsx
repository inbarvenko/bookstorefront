import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './BookCard.module';
import {Book} from '../../../types';
import {getBookPhoto} from '../../../api/bookApi';
import CustomTheme from '../../../theme';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';

type Props = {
  book: Book;
};

const BookCard = ({book}: Props) => {
  // const bookPhotoName = getBookPhoto({name: book.name, author: book.author});

  return (
    <View style={styles.container}>
      <View>
        {/* <Image
            src={require(bookPhotoName[0])}
        /> */}
        <View style={styles.text_container}>
          <Text style={styles.text}>{book.name}</Text>
          <Text style={[styles.text, {color: CustomTheme.colors.dark_grey}]}>{book.author}</Text>
        </View>
        <Rating rate={book.rate || 0}/>
        <Button
            title={'$ ' + book.price + " URD"
        }
        />
      </View>
    </View>
  );
};

export default BookCard;
