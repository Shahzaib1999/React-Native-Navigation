import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

class SignInScreen extends Component {

    signIn = async() => {
        const token = await AsyncStorage.setItem('userToken','Shahzaib');

        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Continue' onPress={this.signIn}/>        
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});