import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import SplashImage from '../../assets/Splash.png'

const Splash = () => {
    return (
        <ImageBackground source={SplashImage} style={styles.bg} >

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})


const backgroundColor = () => {
    return (
        <ImageBackground source={SplashImage} style={styles.bg} >

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})

const buttonStyle = () => {
    return (
        <ImageBackground source={SplashImage} style={styles.bg} >

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})

export default Splash;