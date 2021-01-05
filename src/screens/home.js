import React from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header';
import Colors from "../helpers/colors";
import Burger from "../helpers/burger.json";

const { height, width } = Dimensions.get('window');

const Category = () => {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 30
      }}>
            <Header
                title="Burger House"
            />
            <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
                { Burger.burgers.map((item,key) => (
                <View>
                    <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: Colors.DARK.WHITE, borderRadius: 20, margin: 10, padding: 10 }} >
                        <Image
                            source={{ uri: item.image }} 
                            style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                        />
                        <Text style={{ fontWeight: "bold", color: Colors.DARK.DARK_PRIMARY_COLOR }}>{item.name}</Text>
                        <Text style={{ marginTop: 3, color: Colors.DARK.DARK_PRIMARY_COLOR }}>{item.rate}</Text>
                        <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={ item.check ? Colors.DARK.PRIMARY_COLOR : Colors.DARK.LIGHT_GRAY}/>
                    </View>
                    <View style={{ width: width/ 2.3, height: height/ 14, margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius:10, backgroundColor: Colors.DARK.LIGHT_PRIMARY_COLOR }}>
                        <Text>Add</Text>
                    </View>
                </View>
                ))}
            </View>
    </View>
  )
}
export default Category;