import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {getStyle} from './BookCard.styles';
import CustomTheme from 'src/theme';
import Rating from 'src/components/Rating';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {Book} from 'src/types/book';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';
import {AppStackParamList} from 'src/navigation/AppStack';
import PoppinsText from '../PoppinsText/PoppinsText';

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({book}: Props) => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
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
              source={isLiked ? images.button_heart_saved : images.button_heart}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text_container}>
          <PoppinsText style={styles.text}>{book.name}</PoppinsText>
          <PoppinsText
            style={[styles.text, {color: CustomTheme.colors[theme].dark_grey}]}>
            {book.author}
          </PoppinsText>
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
