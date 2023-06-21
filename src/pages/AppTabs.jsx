import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile'
import Request from './Request';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "HomeStack" component={Home} options={{headerShown : false}}/>
            <Tab.Screen name = "Profile" component={Profile} options={{headerShown : false}}/>
        </Tab.Navigator>
    )
}
export default AppTabs