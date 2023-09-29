'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image,
} from 'react-native';

type Props = {};
export default class StartScreen extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
    componentDidMount() {
        
        setTimeout(()=>{
            this.props.navigation.replace(
                'Home');
            }, 3000); 
     
  
      };
  
  render() {
    return (
      <View style={styles.container}>

        <Image
              source={require('./resources/start_screen_2.jpg')} style={styles.thumb}
              />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'stretch'
  },

  thumb: {
    height: undefined,
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    
  },
});