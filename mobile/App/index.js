import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import List from "./screens/List";
import Details from "./screens/Details";
import CreateCache from "./screens/CreateCache";
import EditCache from "./screens/EditCache";

import { AddButton, CloseButton } from "./components/Navigation";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: "#3A8552"
  },
  headerTintColor: "#fff"
};

const Information = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Caches",
        headerRight: <AddButton navigation={navigation} />
      })
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam("item", {}).title
      })
    }
  },
  {
    defaultNavigationOptions: {
      ...defaultStackOptions
    }
  }
);

const App = createStackNavigator(
  {
    Information: {
      screen: Information
    },
    CreateCache: {
      screen: createStackNavigator(
        {
          CreateCache: {
            screen: CreateCache,
            navigationOptions: ({ navigation }) => ({
              headerTitle: "Create Cache",
              headerRight: <CloseButton navigation={navigation} />
            })
          }
        },
        {
          defaultNavigationOptions: {
            ...defaultStackOptions
          }
        }
      )
    },
    EditCache: {
      screen: createStackNavigator(
        {
          EditCache: {
            screen: EditCache,
            navigationOptions: ({ navigation }) => ({
              headerTitle: "Edit Cache",
              headerRight: <CloseButton navigation={navigation} />
            })
          }
        },
        {
          defaultNavigationOptions: {
            ...defaultStackOptions
          }
        }
      )
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

const AppWithContainer = createAppContainer(App);

export default () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <AppWithContainer />
  </React.Fragment>
);