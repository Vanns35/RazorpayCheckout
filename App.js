import * as React from 'react';
import { View, Text, Button, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/home';

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5, tintColor: '#000'}}
        />
      </TouchableOpacity>
      <Text>Hiee</Text>
      <Text>Hiee</Text>
      <Text>Hiee</Text>
    </View>
  );
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
}

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cart Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


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
						iconName = 'ios-list';
					  }
		  
					  return <Ionicons name={iconName} size={size} color={color} />;
					},
				  })}>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Cart" component={CartScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
  );
}

function App() {
  const dimensions = useWindowDimensions();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <NavigationDrawerStructure {...props} />}>
        				<Drawer.Screen name="Tab" component={TabScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;