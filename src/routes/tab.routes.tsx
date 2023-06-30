import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

const {Screen, Navigator} = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#605f96'
            }}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Lucy',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='star'
                            color={color}
                            size={size}
                        
                        />
                    )
                }}
                
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    tabBarLabel: 'David',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='computer'
                            color={color}
                            size={size}
                    
                        />
                    )
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    tabBarLabel: 'Rebecca',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name='money'
                            color={color}
                            size={size}
                    
                        />
                    )
                }}
            />
        </Navigator>
    )
}