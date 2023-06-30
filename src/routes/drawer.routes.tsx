import { createDrawerNavigator } from '@react-navigation/drawer';


const {Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='Lucy'
                component={ScreenA}
                
                
            />
            <Screen
                name='David'
                component={ScreenB}
            />
            <Screen
                name='Rebecca'
                component={ScreenC}
            />
        </Navigator>
    )
}