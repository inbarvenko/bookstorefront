import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {getStyle} from './BookCard.styles';
import CustomTheme from 'src/theme';
import Rating from 'src/components/Rating';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {Book} from 'src/types/book';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from 'src/redux/hooks';

type Props = {
  book: Book;
};

type RootStackParamList = {
  Book: {bookId: string} | undefined;
};

const BookCard: React.FC<Props> = ({book}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const [isLiked, setLike] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('Book', {bookId: book.id})}>
        <View>
          <Image style={styles.photo} source={{uri: book.photoUrl}} />
          <TouchableOpacity
            onPress={() => setLike(!isLiked)}
            style={styles.like_container}>
            <Image
              style={styles.like}
              source={
                isLiked
                  ? require('src/assets/img/button_save_active.png')
                  : require('src/assets/img/button_save.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text}>{book.name}</Text>
          <Text
            style={[styles.text, {color: CustomTheme.colors[theme].dark_grey}]}>
            {book.author}
          </Text>
        </View>
        <Rating size={103} rate={book.rate || 0} />
        <Button
          styleButton={styles.marginTop}
          colorText={CustomTheme.colors[theme].light}
          title={'$ ' + book.price + ' URD'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;
