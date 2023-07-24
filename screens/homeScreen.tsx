import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={tw`text-red-500`}>HomeScreen stuff</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})