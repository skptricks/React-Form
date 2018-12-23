/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from "react";
 import { Platform, StyleSheet, View, Text, Share, TextInput, Button } from "react-native";

 export default class App extends Component {

   constructor() {
      super();
      this.state = { inputValue: '' };
  }

  ShareMessage = () => {
  //Here is the Share API
  Share.share({ message: this.state.inputValue.toString(), title : "Sharing via react native" })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    .catch(errorMsg => console.log(errorMsg));
 };


    render() {
      return (
        <View style={styles.container}>

        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter Text to Share"
          style={styles.TextInputStyle}
          onChangeText={TextInputText => { this.setState({ inputValue: TextInputText }); }}
        />

        <View style={{margin: 10}}>
         <Button title = "SHARE"   onPress={this.ShareMessage} />
        </View>
      </View>
      );
    }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  TextInputStyle: {
    borderWidth: 2,
    borderColor: 'blue',
    width: '90%',
    height: 40,
    textAlign: 'center',
  },

});
