'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
var Sound = require('react-native-sound');

type Props = {};
export default class MafiaTimeComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      error: false,  
    }
  }
    componentDidMount() {
        this.noch = new Sound('noch.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
          this.day = new Sound('day.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
  
          this.mafia_deal = new Sound('mafia_deal.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
  
          this.mafia_sleeps = new Sound('mafia_sleeps.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
          this.ten_seconds = new Sound('ten_seconds.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });

          this.play_song();
    }
    play_song = () =>{  
        setTimeout(()=>{
  
            this.noch.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          })}, 14000); 
          

          setTimeout(()=>{
    
            this.mafia_deal.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          });
          KeepAwake.activate();
            }, 1000);
    
          setTimeout(()=>{
    
            this.ten_seconds.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          })}, 71000); 
    
          setTimeout(()=>{
    
            this.day.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          });
          this.props.navigation.replace(
            'Day', {players_data: this.state.players});
        }, 90000); 
    
          setTimeout(()=>{
    
            this.mafia_sleeps.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          });
          KeepAwake.deactivate();
          
        }, 83000); 

         

    };
  
  render() {
    //const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Everyone is Sleeping</Text>
          <Text style={styles.title}>It's Mafia's Time</Text>
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