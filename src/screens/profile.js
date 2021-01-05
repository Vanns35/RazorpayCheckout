import React from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const Category = () => {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 30
      }}>
            <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
                <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: '#fff', borderRadius: 20, margin: 10, padding: 10 }} >
                    <Image
                        source={{ uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Italian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606349819.jpeg' }} 
                        style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                    />
                    <Text>Hot Spicy Burger</Text>
                    <Text>$14</Text>
                    <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={'orange'}/>
                </View>
                <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: '#fff', borderRadius: 20, margin: 10, padding: 10 }} >
                    <Image
                        source={{ uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Italian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606349819.jpeg' }} 
                        style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                    />
                    <Text>Hot Spicy Burger</Text>
                    <Text>$14</Text>
                    <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={'orange'}/>
                </View>
                <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: '#fff', borderRadius: 20, margin: 10, padding: 10 }} >
                    <Image
                        source={{ uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Italian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606349819.jpeg' }} 
                        style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                    />
                    <Text>Hot Spicy Burger</Text>
                    <Text>$14</Text>
                    <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={'grey'}/>
                </View>
                <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: '#fff', borderRadius: 20, margin: 10, padding: 10 }} >
                    <Image
                        source={{ uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Italian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606349819.jpeg' }} 
                        style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                    />
                    <Text>Hot Spicy Burger</Text>
                    <Text>$14</Text>
                    <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={'orange'}/>
                </View>
            </View>
    </View>
  )
}
export default Category;