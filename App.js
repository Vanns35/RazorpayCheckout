import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/home';
import Cart from './src/screens/cart';
import Profile from './src/screens/profile';
import Root from './src/navigations/root';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  const dimensions = useWindowDimensions();
  return (
      <Tab.Navigator 
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					  let iconName= "Home";
		  
					  if (route.name === 'Home') {
						iconName = 'ios-home';
					  } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            } else {
						iconName = 'ios-cart';
					  }
            if(focused) {
              return <Ionicons name={iconName} size={size} color={'#bba0ff'} />;
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
				  })}
          tabBarOptions= {{ activeTintColor:'#bba0ff'}}
          >
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator>
  );
}

function DrawerScreen() {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <Root {...props} />}>
        				<Drawer.Screen name="Tab" component={TabScreen} />

      </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Drawer" component={DrawerScreen} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;