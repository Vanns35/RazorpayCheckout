import React from 'react'
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../helpers/colors";

import { useNavigation } from '@react-navigation/native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const Header = (props) => {

    const navigation = useNavigation();

    const { title, back, color } = props;

    function onPressMenu() {
        navigation.openDrawer();
    }

    function onPressBack() {
        navigation.goBack();
    }

    return (
        <View style={{ marginTop: Platform.OS === 'ios' ? isIPhoneX() ? 44 : 20 : 0 }}>
            <View style={{ paddingTop: 30, paddingBottom: 20, backgroundColor: color ? color : null, width: '100%' }}>

            </View>

            { back ?
                <View style={styles.bullets}>
                    <Ionicons onPress={onPressBack} name="md-arrow-back" size={30} color={color ? Colors.DARK.WHITE : Colors.DARK.PRIMARY_COLOR} style={{ marginHorizontal: 10 }} />
                </View>
                :
                <View style={styles.bullets}>
                    <MaterialIcons onPress={onPressMenu} name="menu" size={30} color={ color ? Colors.DARK.WHITE : Colors.DARK.PRIMARY_COLOR} style={{ marginHorizontal: 10 }} />
                </View>
            }

            <View style={styles.centerBullet}>
                <Text style={{ color: color ? Colors.DARK.WHITE : Colors.DARK.PRIMARY_COLOR, marginTop: 5, fontWeight: 'bold', marginLeft: -30 }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bullets: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 8,
    },
    centerBullet: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 8,
    }
});

export default Header;