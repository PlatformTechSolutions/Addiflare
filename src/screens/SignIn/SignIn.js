import React, { Component, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {LOGIN} from '../../Container/data/mutations'
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import {gql} from 'apollo-boost'



const SignIn = (props)=> {
    
    const [SignIn, {data} ] = useMutation(LOGIN)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(password)
    useEffect(() => {
        console.log("username", username)
    })
    console.log("data",password)
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign in to your Account' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='Enter username' onChangeText={text=>setUsername(text)}/>
                </View>
                <View style={{ paddingTop: 18 }} >
                    <Input placeholder='Enter Password' secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
                </View>
                <Common text='Login' userText='New User? Create Account' skipText='Skip Sign In'  SubmitData={()=>SignIn({variables:{username:username, password:password}})}/>   
            </KeyboardAvoidingView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default SignIn;