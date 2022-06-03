'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';
import { thisTypeAnnotation } from '@babel/types';

type Props = {};
export default class KillandCheck extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      counter: this.props.navigation.state.params.temp_counter,
      kill_choice: this.props.navigation.state.params.temp_kill_choice,
      confirm: 'role_checked',
      error: false,
      message: '',
      button_text: 'Confirm and pass',
      button_function: this.nextPlayer,
      image_source_arr: [
        require('./resources/citizen.png'),
        require('./resources/mafia.png'),
        require('./resources/don.png'),
        require('./resources/sheriff_2.png'),
        require('./resources/true_story.jpg')],
      image_source: require('./resources/true_story.jpg')
                
      
    }
  }
    componentDidMount() {
        console.log('Kill and Check page');
        console.log(this.state.players[this.state.counter].role);
        if(this.state.players[this.state.counter].role == 'Citizen')
        {
            this.setState({image_source: this.state.image_source_arr[0]});
            this.setState({button_function: this.nextPlayer});
            
            if(this.state.counter==9) {
                this.setState({message: 'You are last'});
                this.setState({button_text: '2nd DAY'});
                }
            else{
                this.setState({message: 'CONFIRM'});
                this.setState({button_text: 'CONFIRM and PASS'})
            }
            

        }
        else if(this.state.players[this.state.counter].role == 'Mafia')
        {
            this.setState({image_source: this.state.image_source_arr[1]});
            this.setState({message: 'You are Mafia'});
            this.setState({button_text: 'KILL SOMEONE'});
            this.setState({button_function: this.kill_someone});
        
        }
        else if(this.state.players[this.state.counter].role == 'Don')
        {
            this.setState({image_source: this.state.image_source_arr[2]});
            this.setState({message: 'You are Don'});
            this.setState({button_text: 'KILL SOMEONE'});
            this.setState({button_function: this.kill_someone});
        }
        else if(this.state.players[this.state.counter].role == 'Sheriff')
        {
            this.setState({image_source: this.state.image_source_arr[3]});
            this.setState({message: 'You are Sheriff'});
            this.setState({button_text: 'CHECK SOMEONE'});
            this.setState({button_function: this.check_someone});
        
        }
        else
        {this.setState({image_source: this.state.image_source_arr[4]});}
      }

  nextPlayer= () => {
    //this.increaseCounter();
    if(this.state.counter<9){
        this.props.navigation.replace(
            'Night', {players_data: this.state.players, temp_confirm: this.state.confirm, temp_counter: this.state.counter, temp_kill_choice: this.state.kill_choice});
        
    }
    else{
        console.log('Mafia time Kill and Check');
    //this.playMusic();
    this.props.navigation.replace(
        'Second_Day', {players_data: this.state.players, temp_kill_choice: this.state.kill_choice});
    
        }
    };

    kill_someone = () => {
        console.log('Open killing options');
        this.props.navigation.navigate(
            'Kill', {players_data: this.state.players, temp_counter: this.state.counter, temp_kill_choice: this.state.kill_choice});
        
        };
    check_someone = () => {
            console.log('Search for someone');
            this.props.navigation.navigate(
                'Check', {players_data: this.state.players, temp_counter: this.state.counter, temp_kill_choice: this.state.kill_choice});
            
            };
  
  render() {
    //const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> You are #{this.state.counter+1} </Text>
              <Text style={styles.title}> {this.state.players[this.state.counter].name}</Text>
          </View>
          <View style={styles.thumb}>
            <Image source={this.state.image_source} style = {styles.thumb}
              />
          </View>
          <View style={styles.titleContainer}>
          <Text style={styles.title}> {this.state.players[this.state.counter].role}</Text>
          </View>
          </View>
        
          <View style={styles.buttonContainer}>
          <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.state.button_function}
                        >
                         
                         <Text style={styles.buttonText}>{this.state.button_text}</Text>
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
    flex:3,
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