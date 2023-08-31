import React from 'react';
import {Image, Text, View} from 'react-native';
import {getStyle} from './Comment.styles';
import {Comment} from 'src/types/comment';
import {useAppSelector} from 'src/redux/hooks';

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
            comment.author.photoUrl
              ? comment.author.photoUrl
              : require('src/assets/img/userlogo.png')
          }
          style={styles.img}
        />
        <View style={styles.text_container}>
          <Text style={styles.username}>
            {comment.author.first_name + ' ' + comment.author.last_name}
          </Text>
          <Text style={[styles.username, styles.date]}>
            {comment.created_at}
          </Text>
        </View>
      </View>
      <Text style={styles.text}>{comment.comment_text}</Text>
    </View>
  );
};

export default CommentComponent;
