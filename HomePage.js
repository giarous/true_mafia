'use strict';

  import React, { Component } from 'react';
  import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
  } from 'react-native';
  var Sound = require('react-native-sound');
  
  type Props = {};
  
  export default class Home extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false,
        names:['Player 1','Player 2','Player 3','Player 4','Player 5','Player 6','Player 7','Player 8','Player 9','Player 10',],
      };

      this._updatePlayers = this._updatePlayers.bind(this);
    }

    stop_song=()=>{
      this.hello.stop();

    }
    
    play_song = () =>{
      
      this.noch.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
      })

      setTimeout(()=>{

        this.hello.play((success) => {
        if (!success) {
          console.log('Sound did not stopped properly')
        }
      })}, 10000); 

      setTimeout(()=>{

        this.noch.stop((success) => {
        if (!success) {
          console.log('Sound did not stopped properly')
        }
      })}, 15000); 

    };

    showList = () => {
      this.props.navigation.replace(
        'List', {listings: this.state.names, randomize: false});
    };

    showList_2 = () => {
      this.props.navigation.replace(
        'List', {listings: this.state.names, randomize: true});
    };

    _updatePlayers = (text, index) => {
      const newArray = [...this.state.names];
      newArray[index] = text;
      this.setState({ names: newArray });
      console.log(this.state.names);
      
    };

    handleChangeText(newText){
      this.setState({value: newText});
      
    }
    
      componentDidMount() {

      }

  
    render() {  
    console.log(this.state.names);
      return (
          <View style = {styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Enter the Players</Text>
              </View>
              <View style={styles.main}>
                 <View style = {styles.col} >
                  <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 1"
                      defaultValue = {this.state.names[0]}
                      onChangeText={(text) =>this._updatePlayers(text,0)} />
                      
                    <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 2"
                      defaultValue = {this.state.names[1]}
                      onChangeText={(text) =>this._updatePlayers(text,1)} />
                
                    <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 3"
                      defaultValue = {this.state.names[2]}
                      onChangeText={(text) =>this._updatePlayers(text,2)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 4"
                      defaultValue = {this.state.names[3]}
                      onChangeText={(text) =>this._updatePlayers(text,3)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 5"
                      defaultValue = {this.state.names[4]}
                      onChangeText={(text) =>this._updatePlayers(text,4)} />
                 </View>
                 <View style = {styles.col} >
                  <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 6"
                      defaultValue = {this.state.names[5]}
                      onChangeText={(text) =>this._updatePlayers(text,5)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 7"
                      defaultValue = {this.state.names[6]}
                      onChangeText={(text) =>this._updatePlayers(text,6)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 8"
                      defaultValue = {this.state.names[7]}
                      onChangeText={(text) =>this._updatePlayers(text,7)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 9"
                      defaultValue = {this.state.names[8]}
                      onChangeText={(text) =>this._updatePlayers(text,8)} />
                      <TextInput 
                      style = {styles.textInput} 
                      placeholder="Player 10"
                      defaultValue = {this.state.names[9]}
                      onChangeText={(text) =>this._updatePlayers(text,9)} />
                 </View>

              </View>
              <View style = {styles.buttonFrame}>
              <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.showList}
                      >
                      <Text
                          style={styles.buttonText}>
                         Keep Positions
                      </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.showList_2}
                      >
                      <Text
                          style={styles.buttonText}>
                         Randomize Positions
                      </Text>
                  </TouchableHighlight>
                  
              </View>
              
          </View>
          
      )
    }
  }
  
  const styles = StyleSheet.create({
  
    container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#2a8ab7',
          
        },

        col: {
          flex: 1,
          marginHorizontal: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          
        },
  
    main: {
      marginHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#2a8ab7'
    },
    titleContainer: {
      height: 70,
      marginHorizontal: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#2a8ab7'
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },

    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#111',
      alignSelf: 'center'
    },

    textInput: {
    height: 45,
      marginTop: 3,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: '#111'
    },

    buttonFrame:{
      height: 90,  
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20
    },
    button: {
      flex:1,
      backgroundColor:'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 10,
      marginHorizontal: 50,
      justifyContent: 'center'
    }
  });