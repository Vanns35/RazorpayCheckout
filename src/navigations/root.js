import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ marginTop: 30}}>
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
        <Text>Hello</Text>
      </View>
    );
  };

  export default NavigationDrawerStructure;