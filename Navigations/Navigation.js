import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'


const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'Rechercher' }}
        />
       <Stack.Screen 
          name="FilmDetail" 
          component={FilmDetail} 
          options={{ title: '' }}
        />
      </Stack.Navigator>
  );
};


//TabNavigator(est maintenant la navigation principale)
const TabNavigator = createBottomTabNavigator();

function MoviesTabNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
              const icons = {
                Home: 'home',
                Profile: 'account',
              };
          }
        })}
      >
        <TabNavigator.Screen name="Search" component={SearchStackNavigator}/>
        <TabNavigator.Screen name="Favorites" component={Favorites} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default MoviesTabNavigator;