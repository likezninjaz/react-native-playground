import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import { Provider } from "react-redux";

import { store } from "./store";
import { AuthorizationScreen } from './screens/Authorization';
import { ListScreen } from './screens/List';
import { DetailScreen } from './screens/Detail';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Authorization: { 
      screen: AuthorizationScreen,
      navigationOptions: {
        header: null
      }
    },
    List: { 
      screen: ListScreen,
      navigationOptions: {
        title: 'Draggable List'
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Name from store'
      }
    }
  },
  {
    initialRouteName: 'List',
  }
);

const AppContainer = createNavigationContainer(AppNavigator);
