import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Home from './HomePage';
import DetailsComponent from './DetailsPage';
import ListComponent from './ListComponent';
import DayComponent from './FirstDay';
import NightComponent from './Night';
import CheckRole from './Role';
import KillandCheck from './Killandcheck';
import Killing from './KillingOptions';
import Checking from './CheckSomeone';
import ConfirmCheck from './ConfirmCheck';
import SecondDay from './SecondDay';
import StartScreen from './StartScreen';
import MafiaTimeComponent from './MafiaTime';
'use strict';
type Props = {}; 

const App = createAppContainer(createStackNavigator({
  Start: {
    screen: StartScreen
  },
  Home: { 
    screen: Home, 
    navigationOptions: { title: "Cure for Maska's insomnia :D" }
  },
  List: {
    screen: ListComponent,
    navigationOptions: {title: "Positions on the table" }
  },

  Details: {
    screen: DetailsComponent,
    navigationOptions: {title: "Introduction to roles" }
  },
  MafiaTime: {
    screen: MafiaTimeComponent,
    navigationOptions: {title: "Mafia time" }
  },
  Day: {
    screen: DayComponent,
    navigationOptions: {title: "First Day" }
  },
  Role: {
    screen: CheckRole,
    navigationOptions: {title: "Your Role"}
  },

  Night: {
    screen: NightComponent,
    navigationOptions: {title: "Regular Night" }
  },
  Second_Night: {
    screen: KillandCheck,
    navigationOptions: {title: "Check kills" }
  },
  Kill: {
    screen: Killing,
    navigationOptions: {title: "Choose kills" }
  },
  Check: {
    screen: Checking,
    navigationOptions: {title: "Choose who to check" }
  },
  Confirm: {
    screen: ConfirmCheck,
    navigationOptions: {title: "Your check is" }
  },
  Second_Day: {
    screen: SecondDay,
    navigationOptions: {title: "2nd Day" }
  },
  },
  {
    initialRouteName: 'Start',
    mode: 'modal',
    headerMode: 'none'
  }));
export default App;