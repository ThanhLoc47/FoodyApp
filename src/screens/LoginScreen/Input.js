import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ placeholder, secureTextEntry, value, onChangeText, title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    }
})

export default Input
