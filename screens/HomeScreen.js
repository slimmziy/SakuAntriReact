import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Home/Category';

const { height, width } = Dimensions.get('window')

class HomeSceen extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if(Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ScrollView scrollEventThrotle={16} >

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20
                            }}>
                                ANTRIAN TERAKHIR
                    </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 1" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 2" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 3" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 4" />
                                </ScrollView>
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    ANTRIAN POPULER
                            </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Semua yang kamu mau tunggu, jadi satu disini
                            </Text>

                                <View style={{ flex: 1, width: width - 40, height: 200, marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }}>
                                    <Image
                                        style={{ flex: 4, height: null, width: null, resizeMode: 'cover', borderRadius: 10 }}
                                        source={require('../assets/wasd2.png')}
                                    />
                                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                        <Text>
                                            Antrian paling populer
                                    </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 1" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 2" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 3" />
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Populer 4" />
                                </ScrollView>
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    KATEGORI
                            </Text>
                            </View>
                            {/*Grid*/}
                            <View>

                            </View>

                        </View>
                    </ScrollView>
                </View>
        );
    }
}

export default HomeSceen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});