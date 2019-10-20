import React from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks';
import {LOGIN} from './data/mutations';
import SignIn from '../screens/SignIn/SignIn'
import {AsyncStorage} from 'react-native'


const authToken = 'Addiflare/token'

export const SignIn = (username, password) => {
        
         const [signIn, {data}] = useMutation(LOGIN,{variables:{username, password}})
        console.log("token", data)
        AsyncStorage.getItem()
        return <SignIn handleSubmit={()=>signIn({username, password})}/>
    }