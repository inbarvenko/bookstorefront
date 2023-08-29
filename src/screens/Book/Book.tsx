import React, {useEffect} from 'react';
import {
  Image,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getBookById, getComments} from '@/redux/slices/booksReducer';
import {styles} from './Book.styles';
import Rating from '@/components/Rating/Rating';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Banner from '@/components/Banner/Banner';
import BookCard from '@/components/BookCard/BookCard';
import {filteredRatingBooks} from '@/redux/selectors';
import CommentComponent from '@/components/Comment/Comment';
import Input from '@/components/Input/Input';
import {sendCommentRequest} from '@/api/bookApi';
import {StackNavigationProp} from '@react-navigation/stack';

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
    dispatch(getBookById(bookId));
    dispatch(getComments(bookId));
  }, [bookId, dispatch]);

  const sendComments = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const res = sendCommentRequest({
      bookId: book.id,
      authorToken: user.access_token,
      commentText: e.nativeEvent.text,
    });

    console.log(res);
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
      {comments.length > 0 &&
        comments.map(item => {
          return (
            <CommentComponent key={book.id + item.created_at} comment={item} />
          );
        })}
      {!user.email ? (
        <Banner
          back_image={require('+/sing_in_banner.png')}
          title="Authorize now"
          description="Authorize now and discover the fabulous world of books"
          button_title="Log In/ Sing Up"
          onButtonPress={() => navigation.navigate('SignIn')}
        />
      ) : (
        <Input
          containerStyle={styles.input}
          textStyle={styles.inputText}
          placeholder="Share a comment"
          upPlaceholder={false}
          onBlur={sendComments}
        />
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
