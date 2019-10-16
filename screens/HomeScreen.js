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
    Alert,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Home/Category';
import styles from '../style/style';

const { height, width } = Dimensions.get('window')

class HomeSceen extends Component {

    // componentWillMount() {
    //     this.startHeaderHeight = 80
    //     if(Platform.OS == 'android') {
    //         this.startHeaderHeight = 100 + StatusBar.currentHeight
    //     }
    // }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView scrollEventThrotle={16} >
                    <View style={{ flex: 1, backgroundColor: 'white' }}>

                        <View >
                            <Text style={styles.headingAccount}>SakuAntri</Text>
                        </View>

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={styles.heading}>ANTRIAN TERAKHIR</Text>
                        </View>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>
                                    <Category imageUri={require('../assets/wasd2.png')}
                                        name="Terakhir 1" />
                                    
                                </TouchableOpacity>

                                <Category imageUri={require('../assets/wasd2.png')}
                                    name="Terakhir 2" />
                                <Category imageUri={require('../assets/wasd2.png')}
                                    name="Terakhir 3" />
                                <Category imageUri={require('../assets/wasd2.png')}
                                    name="Terakhir 4" />
                            </ScrollView>
                        </View>

                        <View >
                            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                                <Text style={styles.heading}>
                                    ANTRIAN POPULER
                                </Text>
                            </View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={styles.normal}>Semua yang kamu mau tunggu, jadi satu disini</Text>

                                <View style={{ width: width - 40, height: 250, marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }}>
                                    <Image
                                        style={{ flex: 2.5, height: null, width: null, resizeMode: 'cover', borderRadius: 10 }}
                                        source={require('../assets/wasd2.png')} />
                                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                        <Text style={styles.semiHeading}>
                                            Antrian paling populer
                                        </Text>
                                        <Text style={styles.normal}>
                                            Skidipappap Sawadihap Konkunhap Alahaphapljhdfsglhdflghdlfkhg
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 130, marginTop: 10 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>

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
            </View >
        );
    }
}

export default HomeSceen;