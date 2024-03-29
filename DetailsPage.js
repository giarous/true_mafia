'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight
} from 'react-native';

type Props = {};

export default class DetailsComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      players: this.props.navigation.state.params.players_data,
      confirm: this.props.navigation.state.params.temp_confirm,
      error2: false,
      message: '',
      counter: this.props.navigation.state.params.temp_counter,
      
    }
  }
    componentDidMount() {

        if(this.state.confirm == 'role_checked'){
          this.setState({ counter: this.state.counter + 1});
        }
        console.log('Detail Page: counter is '+this.state.counter);
      }


  confirmRole = () => {
      this.props.navigation.replace(
        'Role', {players_data: this.state.players, temp_counter: this.state.counter});
};
  
  render() {
    return (
      <View style={styles.container}>
          <View>
          <Text style={styles.title}> 
            #{this.state.counter+1}: {this.state.players[this.state.counter].name}
            </Text>
        </View>
        <View>
          <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.confirmRole}
                        >
                        <Text
                            style={styles.buttonText}>
                          See your Role
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