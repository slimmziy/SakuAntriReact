import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

let { StyleSheet } = React;

import styles from '../style/style';
import HomeScreen from '../screens/HomeScreen'
import { Asset } from 'expo-asset';

class LoginScreen extends Component {
    

    static navigationOptions = {
        header: null
    }

    state = { username: "", password: "" }

    checkLogin() {
        const { username, password } = this.state
        if (username == 'admin' && password == 'admin') {

            // fetch('http://localhost:0000', {method: 'POST', body: `username=${username}&password=${password}`})
            // .then (res => {
            //     console.warn(res)
            // })

            this.props.navigation.navigate('Home')
        } else {
            Alert.alert('Cek lagi dong', 'Username/Password salah', [{
                text: 'Kembali'
            }])
        }
    }

    render() {
        const { heading, input, container } = styles
        return (

            <ImageBackground source={require('../assets/bg.jpg')} style={container}>
                
                <View style={{ alignItems: 'center', paddingBottom: 50 }}>
                    <Image source={require('../assets/wasd2.png')}
                        style={styles.image}
                    />
                </View>

                <Text style={heading}>Silahkan masuk</Text>
                <TextInput style={input} placeholder="Username" placeholderTextColor="#2F4F4F"  onChangeText={text => this.setState({ username: text })} />
                <TextInput style={input} secureTextEntry={true} placeholderTextColor="#2F4F4F" placeholder="Password" onChangeText={text => this.setState({ password: text })} />
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Button title="Masuk"
                        onPress={_ => this.checkLogin()} />
                </View>
                <View>
                <Text numberOfLines={1} style={{padding: 40}}>
                        __________________________________________
                    </Text>
                </View>
                <View style={styles.signupTextCont}>
                    
                    <Text style={styles.signupText}>Belum punya akun?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Daftar</Text></TouchableOpacity>
                </View>
                

            </ImageBackground>


        );
    }
}

export default LoginScreen;