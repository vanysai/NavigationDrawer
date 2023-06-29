import { createDrawerNavigator } from '@react-navigation/drawer';

const {Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                
            />
            <Screen
                name='screenB'
                component={ScreenB}
            />
        </Navigator>
    )
}