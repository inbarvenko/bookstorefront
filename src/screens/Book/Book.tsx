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
import {styles} from './Book.styles';
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

type ParamList = {
  Detail: {
    bookId: string;
  };
};

type RootStackParamList = {
  SignIn: undefined;
};

const BookScreen: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const bookId = route.params!.bookId;
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.bookData.book);
  const comments = useAppSelector(state => state.bookData.comments);
  const user = useAppSelector(state => state.userData);
  const recomendation = useAppSelector(filteredRatingBooks);

  useEffect(() => {
    try {
      dispatch(getBookById(bookId));

      const res = getCommentsRequest(bookId);
      res.then(data => {
        if (!data) {
          return;
        }
        dispatch(setCommets(data));
      });
    } catch (error) {
      console.log(error);
    }
  }, [bookId, dispatch]);

  const sendComments = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    try {
      const res = sendCommentRequest({
        bookId: book.id,
        authorToken: user.access_token,
        commentText: e.nativeEvent.text,
      });
      res.then(data => {
        if (!data) {
          return;
        }
        dispatch(addComment(data));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.title_book}>
          <Image style={styles.photo} source={{uri: book.photoUrl}} />
          <View style={styles.text_box}>
            <Text style={styles.name}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Rating size={135} rate={book.rate || 0} bookPage={true} />
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
            backColor={CustomTheme.colors.dark_grey}
            width={150}
            height={38}
            colorText={CustomTheme.colors.light}
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
            colorText={CustomTheme.colors.light}
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
          back_image={require('src/assets/img/sing_in_banner.png')}
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
            colorText={CustomTheme.colors.light}
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
          return <BookCard key={item.author + item.name} book={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default BookScreen;
