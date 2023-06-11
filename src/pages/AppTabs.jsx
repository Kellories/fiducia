import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile'

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={Home}/>
            <Tab.Screen name = "Profile" component={Profile}/>
        </Tab.Navigator>
    )
}
export default AppTabs