import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Profile.styles';
import Input from 'src/components/Input';
import {useAppSelector} from 'src/redux/hooks';
import CustomTheme from 'src/theme';
import Button from 'src/components/Button/Button';

const ProfilePage: React.FC = () => {
  const user = useAppSelector(state => state.userData);

  const [editState, setEditState] = useState({
    editInfo: false,
    editPassword: false,
  });

  // console.log(editState);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screenContainer}>
        <View style={styles.images}>
          <Image
            style={styles.photo}
            source={require('src/assets/img/userlogo.png')}
          />
          <TouchableOpacity style={styles.photo_button_container}>
            <Image
              style={styles.photo_button}
              source={require('src/assets/img/button_photo.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Personal information</Text>
          <Text
            onPress={() => {
              setEditState({...editState, editInfo: !editState.editInfo});
            }}
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
            onBlur={() => {
              //На блюр сохраняет значение инпута
            }}
            image={require('src/assets/img/Mail_disabled.png')}
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
            onBlur={() => {
              //На блюр сохраняет значение инпута
            }}
            image={require('src/assets/img/userprofile.png')}
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
            onBlur={() => {
              //На блюр сохраняет значение инпута
            }}
            image={require('src/assets/img/userprofile.png')}
            upPlaceholder={true}
            info={true}
            editable={editState.editInfo}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Password</Text>
          <Text
            onPress={() => {
              setEditState({
                ...editState,
                editPassword: !editState.editPassword,
              });
            }}
            style={styles.text_link}>
            Change password
          </Text>
        </View>
        {editState.editPassword ? (
          <View>
            <Input
              placeholder="Your old password"
              type="default"
              upPlaceholder={true}
              hintColor={CustomTheme.colors.dark_blue}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              value={'your old password'}
              image={require('src/assets/img/View.png')}
              onBlur={() => {
                //На блюр сохраняет значение инпута
              }}
              secure
            />
            <Input
              placeholder="New password"
              type="default"
              upPlaceholder={true}
              hintColor={CustomTheme.colors.dark_blue}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              image={require('src/assets/img/View.png')}
              hint="Enter your password"
              onBlur={() => {
                //На блюр сохраняет значение инпута
              }}
              secure
            />
            <Input
              placeholder="Password replay"
              type="default"
              upPlaceholder={true}
              hintColor={CustomTheme.colors.dark_blue}
              underlineColorAndroid="transparent"
              containerStyle={styles.inputContainer}
              textStyle={styles.inputText}
              image={require('src/assets/img/View.png')}
              hint="Repeat your password without errors"
              onBlur={() => {
                //На блюр сохраняет значение инпута
              }}
              secure
            />
            <Button
              title="Confirm"
              width={170}
              height={44}
              colorText={CustomTheme.colors.light}
              onPress={() => {
                // Написать логику change password для user
              }}
            />
          </View>
        ) : (
          <Input
            placeholder="Your password"
            type="default"
            upPlaceholder={true}
            hintColor={CustomTheme.colors.dark_blue}
            underlineColorAndroid="transparent"
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
            value={'your password'}
            image={require('src/assets/img/View.png')}
            onBlur={() => {
              //На блюр сохраняет значение инпута
            }}
            secure
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
