import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile'
import Request from './Request';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={Home}/>
            <Tab.Screen name = "Profile" component={Profile}/>
            <Tab.Screen name = "Request" component = {Request}/>
        </Tab.Navigator>
    )
}
export default AppTabs