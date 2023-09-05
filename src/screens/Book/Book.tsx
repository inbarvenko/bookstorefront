import React, {useEffect} from 'react';
import {
  Image,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
import {
  addComment,
  getBookById,
  setCommets,
} from 'src/redux/slices/booksReducer';

import {getStyle} from './Book.styles';
import Rating from 'src/components/Rating';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Banner from 'src/components/Banner';
import BookCard from 'src/components/BookCard';
import {filteredRatingBooks} from 'src/redux/selectors';
import CommentComponent from 'src/components/Comment';
import Input from 'src/components/Input';
import {getCommentsRequest, sendCommentRequest} from 'src/api/bookApi';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomTheme from 'src/theme';
import Button from 'src/components/Button';
import {cannotGetData, cannotSendData} from 'src/utils/notifications';
import {images} from 'src/constants/images';
import {AuthStackParamList} from 'src/navigation/AuthStack';

type ParamList = {
  Detail: {
    bookId: string;
  };
};

const BookScreen: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const bookId = route.params!.bookId;
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.bookData.book);
  const comments = useAppSelector(state => state.bookData.comments);
  const user = useAppSelector(state => state.userData);
  const recomendation = useAppSelector(filteredRatingBooks);
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const handleComments = async () => {
    const data = await getCommentsRequest(bookId);

    if (!data) {
      cannotGetData('comments');
    }
    dispatch(setCommets(data!));
  };

  useEffect(() => {
    try {
      dispatch(getBookById(bookId));
      handleComments();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId, dispatch]);

  const sendComments = async (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    try {
      const data = await sendCommentRequest({
        bookId: book.id,
        commentText: e.nativeEvent.text,
      });
      if (!data) {
        cannotSendData('comment');
      }
      dispatch(addComment(data!));
    } catch (error: ErrorConstructor | any) {
      cannotSendData('comment');
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.title_book}>
          <Image
            style={styles.photo}
            source={{uri: book?.photoUrl} || images.books}
          />
          <View style={styles.text_box}>
            <Text style={styles.name}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Rating size={135} rate={book.rate || 0} bookPage />
          </View>
        </View>
        <View style={styles.descr_container}>
          <Text style={styles.descr_title}>Description</Text>
          <Text style={styles.descr_text}>{book.description}</Text>
        </View>
      </View>
      <View style={styles.variants_container}>
        <View>
          <Text style={[styles.descr_text, styles.paddingBottom]}>
            Paperback
          </Text>
          <Button
            backColor={CustomTheme.colors[theme].dark_grey}
            width={150}
            height={38}
            colorText={CustomTheme.colors[theme].light}
            title="Not available"
          />
        </View>
        <View>
          <Text style={[styles.descr_text, styles.paddingBottom]}>
            Hardcover
          </Text>
          <Button
            width={150}
            height={38}
            colorText={CustomTheme.colors[theme].light}
            title={'$ ' + book.price! + ' USD'}
          />
        </View>
      </View>
      {comments.length > 0 &&
        comments.map(item => {
          return (
            <CommentComponent key={book.id + item.created_at} comment={item} />
          );
        })}
      {!user.email ? (
        <Banner
          back_image={images.sing_in_banner}
          title="Authorize now"
          description="Authorize now and discover the fabulous world of books"
          button_title="Log In/ Sing Up"
          onButtonPress={() => navigation.navigate('SignIn')}
        />
      ) : (
        <View style={styles.paddingBottom}>
          <Input
            containerStyle={styles.input}
            textStyle={styles.inputText}
            placeholder="Share a comment"
            upPlaceholder={false}
            onBlur={sendComments}
          />
          <Button
            colorText={CustomTheme.colors[theme].light}
            title="Post a comment"
            width={210}
          />
        </View>
      )}
      <Text style={[styles.descr_title, styles.name, styles.paddings]}>
        Recommendations
      </Text>
      <View style={styles.bookList}>
        {recomendation.map(item => {
          return (
            <BookCard
              key={item.author + item.name + Math.random()}
              book={item}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BookScreen;
