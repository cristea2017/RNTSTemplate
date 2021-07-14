
//@see-more :https://reactnavigation.org/docs/getting-started
import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import images from '~/assets/images';
// Redux
import { Provider } from 'react-redux';
import { store, persistor } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationService from '~/utils/NavigationService';


/* ------------- Navigation ------------- */

/**
 * Stack Navigation
 */
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

/**
 * Tab Navigation
 */
const Tab = createBottomTabNavigator();
function TabStack() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(route.name, focused, tintColor),
            })}
            tabBarOptions={{
                showLabel: false,
            }}>
            <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
const getTabBarIcon = (routeName, focused) => {
    let iconName;
    switch (routeName) {
        case 'HomeScreen':
            iconName = !focused ? images.tab1 : images.tab1;
            break;
        case 'SettingsScreen':
            iconName = !focused ? images.tab2 : images.tab2;
            break;
        default:
            break;
    }

    return (
        <Image
            style={{ width: 25, height: 25, resizeMode: 'contain' }}
            source={iconName}
        />
    );
};

/**
 * Root Stack
 */
const RootStackNav = createStackNavigator();
function RootStack() {
    return (
        <RootStackNav.Navigator screenOptions={{ headerShown: false }} >
            <RootStackNav.Screen name='Root' component={TabStack} />
        </RootStackNav.Navigator>
    );
}

/**
 * 
 * @returns Main Container || Redux Store
 */
const Navigation = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootStack ref={NavigationService.setNavigatorReference} />
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
}

export default Navigation