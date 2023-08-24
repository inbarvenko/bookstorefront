import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import RootStack from './navigation/Navigation';
import {View, Text, TextInput, Image, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';



function App(): JSX.Element {
  // return(
  //   // <View style={{flex: 1}}>
  //     <ScrollView scrollEnabled={true} contentContainerStyle={{ backgroundColor: 'green', width: '100%',}}>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> TEST </Text>
  //       <Text> HELL!!!!!!!!!!!!!! </Text>
  //     </ScrollView>
  //   //  </View>
  // );
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  );
}

export default App;