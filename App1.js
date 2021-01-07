import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Stack = createStackNavigator();

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';
import ForgetPassword from './components/ForgetPassword';
import SetNewPassword from './components/SetNewPassword';
import VerifyOtp from './components/verify_otp/VerifyOtp';

const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

function DashboardNavigation() {
    return (
            <Stack.Navigator headerMode="screen" mode="card" initialRouteName={Login} options={horizontalAnimation}>
                <Stack.Screen name="dashboard" component={DrawerNavigation} 
                    options={{ horizontalAnimation }, 
                    { 
                        title: "Dashboard",
                        headerTitleAlign: "center",
                        headerShown: true,
                        headerLeft: () => (
                            <View style={styles.drawerMenuHomeIcon}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (navigation.state.isDrawerOpen === false) {
                                            navigation.dispatch(DrawerActions.openDrawer());
                                        } else {
                                            navigation.dispatch(DrawerActions.closeDrawer());
                                        }
                                    }}>
                                    <IcMenuHome />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={styles.drawerMenuHomeIcon}>
                                <TouchableOpacity
                                    onPress={() => {
                                        
                                    }}>
                                    <IcMenuNotifications />
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
            </Stack.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="screen" mode="card" initialRouteName={Login} options={horizontalAnimation}>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ horizontalAnimation },
                    {
                        headerShown: false,
                    }}
                    />
                <Stack.Screen name="register" component={Register} 
                    options={{ horizontalAnimation },
                    {
                        headerShown: false,
                    }}
                    />
                <Stack.Screen name="dashboard" component={DrawerNavigation} 
                    options={{ horizontalAnimation }, 
                    { 
                        title: "Dashboard",
                        headerTitleAlign: "center",
                        headerShown: true,
                        headerLeft: () => (
                            <View style={styles.drawerMenuHomeIcon}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (navigation.state.isDrawerOpen === false) {
                                            navigation.dispatch(DrawerActions.openDrawer());
                                        } else {
                                            navigation.dispatch(DrawerActions.closeDrawer());
                                        }
                                    }}>
                                    <IcMenuHome />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={styles.drawerMenuHomeIcon}>
                                <TouchableOpacity
                                    onPress={() => {
                                        
                                    }}>
                                    <IcMenuNotifications />
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
                <Stack.Screen name="forgetPassword" component={ForgetPassword} 
                    options={{ horizontalAnimation },
                    {
                        headerShown: false,
                    }} />
                <Stack.Screen name="verifyOtp" component={VerifyOtp} 
                    options={{ horizontalAnimation },
                    {
                        headerShown: false,
                    }} />
                <Stack.Screen name="setNewPassword" component={SetNewPassword} 
                    options={{ horizontalAnimation },
                    {
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation(){
    return(
        <Drawer.Navigator initialRouteName="dashboard"
            drawerStyle={{
                backgroundColor: '#000',
                height: '100%'
            }}    
            drawerContentOptions={{
                activeTintColor: '#000',
                activeBackgroundColor: '#FFCC13',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#fff',
                headerMode: '#000',
                itemStyle: { marginVertical: 0 },
                labelStyle: { fontFamily: 'poppins_medium', fontSize: wp('3.4%') }
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
            <Drawer.Screen name="Dashboard" component={DashboardNavigation} 
                options={({ navigation }) => ({
                    title: 'Dashboard',
                    drawerIcon:() =>( <IcNavHome/> ),
                })}
            />
            <Drawer.Screen name="My Cars" component={VerifyOtp} 
                options={({ navigation }) => ({
                    title: 'My Cars',
                    drawerIcon: () => ( <IcNavMyCars/> ),
                })}
            />
            <Drawer.Screen name="Terms & Conditions" component={VerifyOtp} 
                options={({ navigation }) => ({
                    title: 'Terms & Conditions',
                    drawerIcon: () => ( <IcNavTermsAndCond/> ),
                })}
            />
            <Drawer.Screen name="Privacy Policy" component={VerifyOtp} 
                options={({ navigation }) => ({
                    title: 'Privacy Policy',
                    drawerIcon: () => ( <IcNavPrivacyPolicy/> ),
                })}
            />
            <Drawer.Screen name="Logout" component={VerifyOtp} 
                options={({ navigation }) => ({
                    title: 'Logout',
                    drawerIcon: () => ( <IcNavLogout/> ),
                })}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        //backgroundColor: '#fff'
    },
    drawerMenuHomeIcon: {    
        padding: wp('3%')
    },
});

export default Navigation;