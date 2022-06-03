'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';
var Sound = require('react-native-sound');

type Props = {};
export default class DayComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      error: false,
      kill_choice: 'true',
      
    }
  }
    componentDidMount() {
        console.log('1st Day');
        console.log(this.state.players);
        this.regular_night = new Sound('regular_night.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
        });
    }
    play_song = () =>{  
      this.regular_night.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
      })

    };

  the_night= () => {
    this.play_song();
    console.log('Regular Night');
    this.props.navigation.replace(
        'Night', {players_data: this.state.players, temp_counter: 0, temp_kill_choice: this.state.kill_choice});
    
    };
  
  render() {
    //const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>It's DAY in town</Text>
          <Text style={styles.title}>Begin the Discussions</Text>
        </View>
        <View>
          <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.the_night}
                        >
                        <Text
                            style={styles.buttonText}>
                          Night Falls
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
    marginTop: 10,
    justifyContent: 'center'
  },
  
  title: {
    fontSize: 30,
    color: '#656565',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#656565'
  },

  button: {
    height: 60,
    flexDirection: 'row',
    backgroundColor:'grey',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 50,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    alignSelf: 'center'
  },
});