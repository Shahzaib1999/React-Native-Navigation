import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoadingScreen from "../Screens/Auth/AuthLoadingScreen";
import AuthStackNavigator from "./AuthStackNavigator";
import AppDrawerNavigator from './AppDrawerNavigator';


const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Authentication: AuthStackNavigator,
    App: AppDrawerNavigator
})

const appContainer = createAppContainer(SwitchNavigator)

export default appContainer;