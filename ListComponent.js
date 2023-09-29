'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
var Sound = require('react-native-sound');

  
type Props = {};
export default class ListComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      names: this.props.navigation.state.params.listings,
      random: this.props.navigation.state.params.randomize,
      text: '',
      value: 'default',
      counter: 0,

      players: [
        {pos: 0, name: 'Player 1', role: 'Default'},
        {pos: 1, name: 'Player 2', role: 'Default'},
        {pos: 2, name: 'Player 3', role: 'Default'},
        {pos: 3, name: 'Player 4', role: 'Default'},
        {pos: 4, name: 'Player 5', role: 'Default'},
        {pos: 5, name: 'Player 6', role: 'Default'},
        {pos: 6, name: 'Player 7', role: 'Default'},
        {pos: 7, name: 'Player 8', role: 'Default'},
        {pos: 8, name: 'Player 9', role: 'Default'},
        {pos: 9, name: 'Player 10', role: 'Default'},
    ],
      roles: ['Sheriff','Don','Mafia','Mafia','Citizen','Citizen','Citizen','Citizen','Citizen','Citizen'],
   }
   this.arrayholder = [];
  }
  
  componentDidMount() {
    this._shuffleRoles();
    if(this.state.random) {this._shufflePossitions();}

    this.night = new Sound('night.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
    this.introduction = new Sound('introduction.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
  }

  play_song = () =>{

    setTimeout(()=>{

      this.introduction.play((success) => {
      if (!success) {
        console.log('Sound did not stopped properly')
      }
    })}, 2000); 
    
    this.night.play((success) => {
      if (!success) {
        console.log('Sound did not play')
      }
    })
  }
  _shuffleRoles = () => {
    const newArray = [...this.state.roles];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }   
    this.setState({ roles: newArray });
  };

  _shufflePossitions = () => {
    const newArray = [...this.state.names];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    this.setState({ names: newArray });
  };

  _assignRoles = () => {
  
    const newArray = [...this.state.players];
    for (let i = 0; i < 10; i++) {
      newArray[i].name = this.state.names[i];
      newArray[i].role = this.state.roles[i];
      
  }
  
  this.setState({ players: newArray});
  this.play_song();
  this._nightFalls();

  
  };


  _nightFalls = () => {
    this.props.navigation.replace(
      'Details', {players_data: this.state.players, temp_counter: this.state.counter});
  };

  render() {
    console.log(this.state.names);
    console.log(this.state.roles);
    console.log(this.state.players);
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Numbers</Text>
        </View>
        <View style={styles.main}>
          
          <Text style={styles.textStyle}>No 1: {this.state.names[0]} </Text>
          <Text style={styles.textStyle}>No 2: {this.state.names[1]} </Text>
          <Text style={styles.textStyle}>No 3: {this.state.names[2]} </Text>
          <Text style={styles.textStyle}>No 4: {this.state.names[3]} </Text>
          <Text style={styles.textStyle}>No 5: {this.state.names[4]} </Text>
          <Text style={styles.textStyle}>No 6: {this.state.names[5]} </Text>
          <Text style={styles.textStyle}>No 7: {this.state.names[6]} </Text>
          <Text style={styles.textStyle}>No 8: {this.state.names[7]} </Text>
          <Text style={styles.textStyle}>No 9: {this.state.names[8]} </Text>
          <Text style={styles.textStyle}>No 10: {this.state.names[9]} </Text>
        </View>
        <View style={styles.buttonFrame}>
          <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this._assignRoles}
                      >
                      <Text
                          style={styles.buttonText}>
                         Start Introduction to Roles
                      </Text>
                  </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#2a8ab7',
        
      },

  main: {
    flex: 14,
    marginHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },

  titleContainer: {
    flex: 2,
    marginHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },

  title: {
    fontSize: 22,
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

  textStyle: {
    flex: 1,
    marginTop: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20, 
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: '#111'
  },

  buttonFrame:{
    flex:2,  
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
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 50,
    justifyContent: 'center'
  }
});