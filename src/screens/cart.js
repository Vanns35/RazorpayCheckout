import React ,{ useState, useEffect } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header';
import Colors from "../helpers/colors";
import Burger from "../helpers/burger.json";
import Cart from "../helpers/cart.json";

const { height, width } = Dimensions.get('window');

const Category = () => {
    const [cartList, action] = useState([])

    var cart = [];
    for( var i = 0 ; i < Cart.cart.length; i++) {
        for ( var j = 0; j < Burger.burgers.length; j++ ) {
            if(Cart.cart[i].burger_id == Burger.burgers[j].id) {
                cart = Cart.cart
            }
        }
    }
    useEffect(() => {
        action(cart)
        }, [])

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
                { cartList.map((item,key) => (
                <View key={key}>
                    <View style={{ width: width/ 2.3, height: height/ 4.6, backgroundColor: Colors.DARK.WHITE, borderRadius: 20, margin: 10, padding: 10 }} >
                        <Image
                            source={{ uri: item.image }} 
                            style={{ width: width/ 2.8, height: height/ 8, alignSelf: 'center', resizeMode: 'stretch' }}
                        />
                        <Text style={{ fontWeight: "bold", color: Colors.DARK.DARK_PRIMARY_COLOR }}>{item.name}</Text>
                        <Text style={{ marginTop: 3, color: Colors.DARK.DARK_PRIMARY_COLOR }}>{item.rate}</Text>
                        <Ionicons style={{ ...StyleSheet.absoluteFill, left: '95%', top: '5%' }} size={20} name={'ios-heart'} color={ item.check ? Colors.DARK.PRIMARY_COLOR : Colors.DARK.LIGHT_GRAY}/>
                    </View>
                </View>
                ))}
            </View>
    </View>
  )
}
export default Category;