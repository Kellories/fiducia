import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Home from './Home';
import Profile from './Profile'
import Request from './Request';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "book-open";
              } 
              else if (route.name === "Profile") {
                iconName = "account";
              } 

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  color={color}
                  style={{ height: 30 }}
                />
              );
            },
            tabBarActiveTintColor: "#6966FF",
            tabBarStyle: {
              borderTopWidth: 0,
              elevation: 0
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "PoppinsMedium",
              padding: Platform.OS === 'ios' ? 0 : 10
            },
            headerShown: false,
          })}
        initialRouteName = "Home"
        >
            <Tab.Screen name = "Home" component={Home} options={{headerShown : false}}/>
            <Tab.Screen name = "Profile" component={Profile} options={{headerShown : false}}/>
        </Tab.Navigator>
    )
}
export default AppTabs