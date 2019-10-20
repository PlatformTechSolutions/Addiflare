import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Banner from '../screens/Banner/Banner';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ConfirmPassword from '../screens/ConfirmPassword/ConfirmPassword';
import SignIn2 from '../screens/SigIn2/SignIn2';

import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import BlogUser from "../screens/BlogUser/BlogUser";
import BlogPosts from "../screens/BlogUser/BlogPosts";

const AuthNav = createStackNavigator({
        SignIn: {
                screen: SignIn
            },
            SignIn2: {
                screen: SignIn2
            },
            SignUp: {
                screen: SignUp
            },
            ForgotPassword: {
                screen: ForgotPassword
            },
            ConfirmPassword: {
                screen: ConfirmPassword
            },
});

const switchNav = createSwitchNavigator({
    Auth:AuthNav,
    Banner: {
        screen: Banner
    },
    Main: createStackNavigator({
        Home: {
            screen: Home
        },
    }, {
        initialRouteName: 'Home',
        headerMode: 'none'
    })
}, {
    initialRouteName: 'Banner',
    headerMode: 'none'
})



const AppNavigator = createAppContainer(switchNav)

export default AppNavigator;