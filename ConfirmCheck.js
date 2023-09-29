'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';
import { thisTypeAnnotation } from '@babel/types';

type Props = {};
export default class ConfirmCheck extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      counter: this.props.navigation.state.params.temp_counter,
      kill_choice: this.props.navigation.state.params.temp_kill_choice,
      check_option: this.props.navigation.state.params.temp_check,
      confirm: 'role_checked',
      error: false,
      message: '',
      generic_role:'Default',
      button_text: 'Confirm and pass',
      image_source_arr: [
        require('./resources/citizen.png'),
        require('./resources/mafia.png'),
        require('./resources/sheriff_2.png'),
        require('./resources/true_story.jpg')],
      image_source: require('./resources/true_story.jpg')
                
      
    }
  }
    componentDidMount() {
        console.log(this.state.players[this.state.check_option].role);
        if(this.state.players[this.state.check_option].role == 'Citizen'){
          this.setState({image_source: this.state.image_source_arr[0]});
          this.setState({generic_role: 'Citizen'});
        }
        else if(this.state.players[this.state.check_option].role == 'Sheriff')
        {
          this.setState({image_source: this.state.image_source_arr[2]});
          this.setState({generic_role: 'Sheriff'});
        }
        else if(this.state.players[this.state.check_option].role == 'Mafia' || this.state.players[this.state.check_option].role == 'Don')
        {
          this.setState({image_source: this.state.image_source_arr[1]});
          this.setState({generic_role: 'Mafia'});
      }
        else
        {this.setState({image_source: this.state.image_source_arr[3]});}
      }

  nextPlayer= () => {
    if(this.state.counter<9){
        this.props.navigation.replace(
            'Night', {players_data: this.state.players, 
                temp_confirm: this.state.confirm, 
                temp_counter: this.state.counter,
                temp_kill_choice: this.state.kill_choice});
        
    }
    else{
        console.log('2nd Day');
    this.props.navigation.replace(
        'Second_Day', {players_data: this.state.players, temp_kill_choice: this.state.kill_choice});
    
        }
    };
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> Your choice is #{this.state.check_option + 1} </Text>
              <Text style={styles.title}> {this.state.players[this.state.check_option].name} </Text>
            </View>
            <View style={styles.thumb}>
              <Image
              source={this.state.image_source} style = {styles.thumb}
              />
            </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.generic_role}</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.nextPlayer}
                        >
                         
                         {this.state.counter == 9 ? <Text style={styles.buttonText}>Just Confirm</Text>: <Text style={styles.buttonText}>Confirm and Pass</Text> }
          </TouchableHighlight>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flexDirection:'column',
  flex: 1,
  justifyContent: 'flex-start',
  backgroundColor: '#2a8ab7'
},
main: {
  flex: 9,
  marginTop: 30,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  
},

buttonContainer: {
  flex:2,  
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20
},

thumb: {
  flex:6,
  height: undefined,
  width: undefined,
  aspectRatio: 1,
  resizeMode: 'contain',
  
},
titleContainer: {
  flex:2,
  fontSize: 30,
  margin: 5,
  color: 'white',
  fontWeight: 'bold',
  alignSelf: 'center'
},

title: {
  flex:1,
  fontSize: 30,
  color: 'white',
  fontWeight: 'bold',
  alignSelf: 'center'
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
},

buttonText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  alignSelf: 'center'
},
});