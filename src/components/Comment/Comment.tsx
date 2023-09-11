import React from 'react';
import {Image, View} from 'react-native';
import {getStyle} from './Comment.styles';
import {Comment} from 'src/types/comment';
import {useAppSelector} from 'src/redux/hooks';
import {images} from 'src/constants/images';
import PoppinsText from '../PoppinsText/PoppinsText';

type Props = {
  comment: Comment;
};

const CommentComponent: React.FC<Props> = ({comment}: Props) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={
            comment.author.photoUrl ? comment.author.photoUrl : images.user_logo
          }
          style={styles.img}
        />
        <View style={styles.text_container}>
          <PoppinsText style={styles.username}>
            {comment.author.first_name + ' ' + comment.author.last_name}
          </PoppinsText>
          <PoppinsText style={[styles.username, styles.date]}>
            {comment.created_at}
          </PoppinsText>
        </View>
      </View>
      <PoppinsText style={styles.text}>{comment.comment_text}</PoppinsText>
    </View>
  );
};

export default CommentComponent;
