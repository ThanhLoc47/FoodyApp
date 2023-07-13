import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Input from './Input'

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Sign In</Text>
                <View>
                    <Input placeholder={"Please fill email ID"} title={'Email ID'} />
                    <Input placeholder={"Please fill password"} title={'Password'} secureTextEntry />
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnSignIn}>
                    <Text style={[styles.forgotPasswordText, { color: 'white' }]}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.styleOrText}>Or</Text>
                <View style={styles.wrapperLogin}>
                    <TouchableOpacity style={[styles.btnSignIn, { flex: 1, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', marginRight: 10, flexDirection: 'row' }]}>
                        <Image
                            source={require('../../assets/googleIcon.png')}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        <Text style={[styles.forgotPasswordText, { color: 'black' }]}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnSignIn, { flex: 1, backgroundColor: '#4a6ea8', flexDirection: 'row' }]}>
                        <Image
                            source={require('../../assets/fbIcon.png')}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        <Text style={[styles.forgotPasswordText, { color: 'white' }]}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapperSignup}>
                    <Text >Not yet a member,</Text>
                    <TouchableOpacity style={styles.btnSignup}>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapperSignup}>
                    <Text >Not yet a member,</Text>
                    <TouchableOpacity style={styles.btnSignup}>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    wrapper: {
        padding: 14,
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    forgotPasswordContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    forgotPasswordText: {
        fontWeight: 'bold'
    },
    btnSignIn: {
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    styleOrText: {
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    wrapperLogin: {
        flexDirection: 'row',
    },
    wrapperSignup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    btnSignup: {

    }
})

export default LoginScreen

