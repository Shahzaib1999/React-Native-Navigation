import {createStackNavigator} from 'react-navigation';
import SignUpScreen from "../Screens/SignUp/SignUpScreen";
import SignInScreen from "../Screens/SignIn/SignInScreen";
import WelcomeScreen from "../Screens/Welcome/WelcomeScreen";

const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
})

export default AuthStackNavigator;
