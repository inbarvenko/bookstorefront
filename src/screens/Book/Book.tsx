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
import Banner from '../ui/Banner/Banner';
import BookCard from '../ui/BookCard/BookCard';
import {filteredRatingBooks} from '../../redux/selectors';
import CommentComponent from '../ui/Comment/Comment';
import CustomTheme from '../../theme';
import Input from '../ui/Input/Input';
import {sendCommentRequest} from '../../api/bookApi';
import Button from '../ui/Button/Button';

type Props = {
  route: any;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const BookScreen: React.FC<Props> = ({route, navigation}: Props) => {
  const bookId = route.params.bookId;
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.bookData.book);
  const comments = useAppSelector(state => state.bookData.comments);
  const user = useAppSelector(state => state.userData);
  const recomendation = useAppSelector(filteredRatingBooks);

  useEffect(() => {
    dispatch(getBookById(bookId));
    dispatch(getComments(bookId));
  }, []);

  const sendComments = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const res = sendCommentRequest({
      bookId: book.id,
      authorToken: user.access_token,
      commentText: e.nativeEvent.text,
    });
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
      <View style={styles.variants_container}>
        <View>
          <Text style={[styles.descr_text, {paddingBottom: 15}]}>
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
          <Text style={[styles.descr_text, {paddingBottom: 15}]}>
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
          back_image={require('../../../assets/img/sing_in_banner.png')}
          title="Authorize now"
          description="Authorize now and discover the fabulous world of books"
          button_title="Log In/ Sing Up"
          onButtonPress={() => navigation.navigate('SignIn')}
        />
      ) : (
        <View style={{padding: 15}}>
          <Input
            containerStyle={styles.input}
            textStyle={styles.inputText}
            placeholder="Share a comment"
            upPlaceholder={false}
            onBlur={sendComments}
          />
          <Button colorText={CustomTheme.colors.light} title="Post a comment" width={210} />
        </View>
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
              key={Math.random() + item.name + user.email}
              book={item}
              navigation={navigation}
            />
          );
        })}
      </View>
      {/* <Footer navigation={navigation} /> */}
    </ScrollView>
  );
};

export default BookScreen;
