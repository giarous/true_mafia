'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight, Button, Alert
} from 'react-native';
import { thisTypeAnnotation } from '@babel/types';

type Props = {};
export default class Checking extends Component<Props> {

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
      check_option: 10,
      value: 'Nothing',
    }
  }
    componentDidMount() {
        console.log('Checking Time');
        
      }


  confirm_check = () => {
    if(this.state.check_option!= 10){
      this.props.navigation.replace(
        'Confirm', {players_data: this.state.players, 
            temp_confirm: this.state.confirm, 
            temp_counter: this.state.counter, 
            temp_kill_choice: this.state.kill_choice,
            temp_check: this.state.check_option});
    }
    else {{Alert.alert('You need to choose someone');}}
    
    };



    buttonPressed= (choice) => {
        
      console.log(choice);
      this.setState({check_option: choice});
      this.setState({value: (choice +1).toString()});
      
      } 
  
  render() {

return (
  <View style={styles.container}>
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> 
          #{this.state.counter+1}: {this.state.players[this.state.counter].name}
          </Text>
          <Text style={styles.title}> 
            Choose a # to Check
          </Text>
      </View>

      
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRows}>
        <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(0)} >
              <Text style={styles.buttonText}>1</Text>
          </TouchableHighlight>
          <View style={styles.emptyFrame}></View>
          <View style={styles.emptyFrame}></View>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(9)} >
              <Text style={styles.buttonText}>10</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRows}>
        <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(1)} >
              <Text style={styles.buttonText}>2</Text>
          </TouchableHighlight>
          <View style={styles.emptyFrame}></View>
          <View style={styles.emptyFrame}></View>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(8)} >
              <Text style={styles.buttonText}>9</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRows}>
        <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(2)} >
              <Text style={styles.buttonText}>3</Text>
          </TouchableHighlight>
          <View style={styles.emptyFrame}></View>
          <View style={styles.emptyFrame}></View>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(7)} >
              <Text style={styles.buttonText}>8</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRows}>
        <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(3)} >
              <Text style={styles.buttonText}>4</Text>
          </TouchableHighlight>
          <View style={styles.emptyFrame}></View>
          <View style={styles.emptyFrame}></View>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(6)} >
              <Text style={styles.buttonText}>7</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonRows}>
          <View style={styles.emptyFrame}></View>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(4)} >
              <Text style={styles.buttonText}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight 
                  style = {styles.buttonFrame} onPress = {() =>this.buttonPressed(5)} >
              <Text style={styles.buttonText}>6</Text>
          </TouchableHighlight>
          <View style={styles.emptyFrame}></View>
        </View>
      
       
    </View>
    </View>
    
    
    <View style={styles.buttonContainer}>
      <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.confirm_check}
                      >
                      
                      <Text style={styles.buttonText_2}>CHECK #{this.state.value}</Text>
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
    flex: 16,
    marginTop: 10,
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

  buttonsContainer: {
    flex:9,
    fontSize: 10,
    marginTop: 20,
    marginHorizontal: 60,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center'
    
  },

  buttonRows: {
    flexDirection:'row',
    flex:1,
    alignSelf: 'center',
  },
  emptyFrame:{
    flex:1,
    margin: 1,
  },

  buttonFrame: {
    flex:1,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 1,
  },

  titleContainer: {
    flex:2,
    fontSize: 25,
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  title: {
    flex:1,
    fontSize: 25,
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
    marginBottom: 5,
    marginTop: 5,
    marginHorizontal: 50,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  buttonText_2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});