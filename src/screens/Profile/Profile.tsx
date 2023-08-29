import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Profile.module';
import Input from '../ui/Input/Input';
import {useAppSelector} from '../../redux/hooks';
import CustomTheme from '../../theme';

const ProfilePage: React.FC = () => {
  const user = useAppSelector(state => state.userData);

  const [editState, setEditState] = useState({
    editInfo: false,
    editPassword: false,
  });

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.images}>
          <Image
            style={styles.photo}
            source={require('../../../assets/img/userlogo.png')}
          />
          <TouchableOpacity style={styles.photo_button_container}>
            <Image
              style={styles.photo_button}
              source={require('../../../assets/img/button_photo.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Personal information</Text>
          <Text
            onPress={() =>
              setEditState({...editState, editInfo: !editState.editInfo})
            }
            style={styles.text_link}>
            Change information
          </Text>
          <Input
            type="numbers-and-punctuation"
            underlineColorAndroid="transparent"
            value={user.email}
            hintColor={CustomTheme.colors.dark_blue}
            textStyle={styles.inputText}
            placeholder="Your email"
            containerStyle={styles.inputContainer}
            onBlur={() => {}}
            image={require('../../../assets/img/Mail_disabled.png')}
            upPlaceholder={true}
            info={true}
            editable={editState.editInfo}
          />
          <Input
            type="numbers-and-punctuation"
            underlineColorAndroid="transparent"
            value={'name'}
            hintColor={CustomTheme.colors.dark_blue}
            textStyle={styles.inputText}
            placeholder="Your first name"
            containerStyle={styles.inputContainer}
            onBlur={() => {}}
            image={require('../../../assets/img/userprofile.png')}
            upPlaceholder={true}
            editable={editState.editInfo}
            info={true}
          />
          <Input
            type="numbers-and-punctuation"
            underlineColorAndroid="transparent"
            value={'surname'}
            hintColor={CustomTheme.colors.dark_blue}
            textStyle={styles.inputText}
            placeholder="Your last name"
            containerStyle={styles.inputContainer}
            onBlur={() => {}}
            image={require('../../../assets/img/userprofile.png')}
            upPlaceholder={true}
            info={true}
            editable={editState.editInfo}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
