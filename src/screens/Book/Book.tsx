import React, {useEffect} from 'react';
import {
  Image,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getBookById, getComments} from '../../redux/booksReducer';
import {styles} from './Book.module';
import Rating from '../ui/Rating/Rating';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import Footer from '../ui/Footer/Footer';
import Banner from '../ui/Banner/Banner';
import BookCard from '../ui/BookCard/BookCard';
import {filteredRatingBooks} from '../../redux/selectors';
import CommentComponent from '../ui/Comment/Comment';
import CustomTheme from '../../theme';
import Input from '../ui/Input/Input';

type Props = {
  route: any;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const BookScreen: React.FC<Props> = ({route, navigation}: Props) => {
  const bookId = route.params.bookId;
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.bookData.book);
  const comments = useAppSelector(state => state.bookData.comments);
  const userEmail = useAppSelector(state => state.userData.email);
  const recomendation = useAppSelector(filteredRatingBooks);

  useEffect(() => {
    dispatch(getBookById(bookId));
    dispatch(getComments(bookId));
  }, []);

  const sendComments = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
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
      {!userEmail ? (
        <Banner
          back_image={require('../../../assets/img/sing_in_banner.png')}
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
      <Text
        style={[
          styles.descr_title,
          styles.name,
          {paddingLeft: 15, paddingTop: 30},
        ]}>
        Recommendations
      </Text>
      <View style={styles.bookList}>
        {recomendation.map(item => {
          return (
            <BookCard
              key={item.author + item.name}
              book={item}
              navigation={navigation}
            />
          );
        })}
      </View>
      <Footer navigation={navigation} />
    </ScrollView>
  );
};

export default BookScreen;
