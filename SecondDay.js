'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';
var Sound = require('react-native-sound');

type Props = {};
export default class SecondDay extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      kill_choice: this.props.navigation.state.params.temp_kill_choice,
      error: false,
      killed_person: 'NO ONE',
      
    }
  }
    componentDidMount() {
        console.log('2nd Day');
        console.log(this.state.kill_choice);

        this.regular_night = new Sound('regular_night.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
        });

        if(this.state.kill_choice!='false'){
          this.setState({killed_person: this.state.kill_choice});
        }
        
         this.num1 = new Sound('num1.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num2 = new Sound('num2.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num3 = new Sound('num3.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num4 = new Sound('num4.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num5 = new Sound('num5.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num6 = new Sound('num6.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num7 = new Sound('num7.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num8 = new Sound('num8.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num9 = new Sound('num9.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.num10 = new Sound('num10.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });

        this.day = new Sound('day.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.miss = new Sound('miss.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.killed = new Sound('killed.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
          
        this.miss = new Sound('miss.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });
        this.killed = new Sound('killed.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) { console.log('failed to load the sound', error);
            return;}
        });

        this.play_song();



        //console.log(this.state.players);
    }
    play_song = () =>{

      setTimeout(()=>{
        
        if(this.state.kill_choice!='false'){
          this.killed.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          });

          setTimeout(()=>{
            if(this.state.kill_choice=='1'){
              this.num1.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='2'){
              this.num2.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='3'){
              this.num3.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='4'){
              this.num4.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='5'){
              this.num5.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='6'){
              this.num6.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='7'){
              this.num7.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='8'){
              this.num8.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else if(this.state.kill_choice=='9'){
              this.num9.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
            else {
              this.num10.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            }
    

            ////
          }, 6000); 



        }
        else {
          this.miss.play((success) => {
            if (!success) {
              console.log('Sound did not stoped properlly')
            }
          })}

      }, 1000); 
      
     
    };


  play_song_night = () =>{  
      this.regular_night.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
      })

    };

  the_night= () => {
    
    this.play_song_night();
    //Needs Checking
    this.setState({kill_choice:'true'});

    setTimeout(()=>{
      console.log('Second Day ends and the kill choice is: '+this.state.kill_choice);
      this.props.navigation.replace(
        'Night', {players_data: this.state.players, temp_counter: 0, temp_kill_choice: this.state.kill_choice});
      }, 500); 
    
    
    };
  
  render() {
    //const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>It's DAY in town</Text>
            <Text style={styles.title}>Mafia killed: {this.state.killed_person}</Text>
            <Text style={styles.title}>Begin the discussions</Text>
        </View>
        <View>
          <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.the_night}
                        >
                        <Text
                            style={styles.buttonText}>
                          Begin Next Night
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