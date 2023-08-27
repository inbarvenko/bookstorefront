import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Comment.module';
import {Comment} from '../../../types';

type Props = {
  comment: Comment;
};

const CommentComponent: React.FC<Props> = ({comment}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={
            (comment.author.photoUrl)
              ? comment.author.photoUrl
              : require('../../../../assets/img/userlogo.png')
          }
          style={styles.img}
        />
        <View style={styles.text_container}>
          <Text style={styles.username}>{comment.author.first_name + " " + comment.author.last_name}</Text>
          <Text style={[styles.username, styles.date]}>{comment.created_at}</Text>
        </View>
      </View>
      <Text style={styles.text}>{comment.comment_text}</Text>
    </View>
  );
};

export default CommentComponent;
