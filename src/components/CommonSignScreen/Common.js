import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Common extends Component {

    NavigateHandler = () => {
        const text = this.props.userText;
        if (text === 'New User? Create Account') {
            this.props.navigation.navigate('SignUp')
        } else {
            this.props.navigation.navigate('SignIn')
        }
    }

    // onCLickHandler = () => {
    //     const text = this.props.text;
    //     if (text === 'Continue') {
    //         this.props.navigation.navigate('SignIn2')
    //     } else if (text === 'Submit') {
    //         this.props.navigation.navigate('ConfirmPassword')
    //     } else if (text === 'SignIn') {
    //         this.props.navigation.navigate('Home')
    //     }
    // }

    switchHandler = () => {
        const text = this.props.conditionalText
        if (text === 'Forgot Password?') {
            this.props.navigation.navigate('ForgotPassword')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.conditionalText && <TouchableHighlight underlayColor='#fff' onPress={this.switchHandler} >
                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.userText}>{this.props.conditionalText}</Text>
                    </View>
                </TouchableHighlight>}
                <TouchableHighlight underlayColor='#fff' onPress={this.props.SubmitData} >
                    <View style={{ paddingTop: 12 }}>
                        <View style={styles.continueContainer}>
                            <Text style={styles.continueText}>{this.props.text}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                
               
                
                {this.props.userText && <TouchableHighlight underlayColor='#fff' onPress={this.NavigateHandler} >
                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.userText}>{this.props.userText}</Text>
                    </View>
                </TouchableHighlight>}
                {this.props.skipText && <TouchableHighlight underlayColor='#fff' onPress={() => this.props.navigation.navigate('Home')} >
                    <View style={{ paddingTop: 20 }}>

                        <Text style={styles.skipText}>{this.props.skipText}</Text>

                    </View>
                </TouchableHighlight>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        borderWidth: 1,
        borderColor: '#CB9F68',
        width: width * 85 / 100,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    iconText: {
        color: '#581400',
        fontSize: 12,
        fontWeight: '400'
    },
    continueContainer: {
        backgroundColor: '#A77248',
        width: width * 85 / 100,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    continueText: {
        color: '#fff',
        fontSize: 13

    },
    lineBox: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineContainer: {
        height: 1,
        backgroundColor: '#CB9F68',
        width: width * 36 / 100,
    },
    or: {
        paddingHorizontal: 15,
        alignSelf: 'center',
        color: '#CB9F68',
        fontSize: 11
    },
    userText: {
        color: '#A77248',
        fontSize: 11,
        borderBottomWidth: 1,
        borderColor: '#A77248',
        fontWeight: 'bold',
    },
    skipText: {
        color: '#581400',
        fontSize: 11,
    }

});


export default withNavigation(Common);