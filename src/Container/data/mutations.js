import {gql} from 'apollo-boost';

export const CREATE_USER = gql`
    mutation CreateUser($username:String!, $email:email, $password:String!, $firstname:String!, $lastname:String!){
        createUser(username:$username, password:$password, email:$email, firstname:$firstname,lastname:$lastname){
            token
        }
    }
`;

export const UPDATE_PROFILE = gql`
    mutation UpdateProfile($city: String, $country: String, $fullname: String, $headerpic: String, $occupation: String, $profilepic: String, $shortdescription: String, $state: String) {
        updateProfile(city: $city, country: $country) {
            profile
        }
    }
`

export const VERYFY_EMAIL = gql`
    mutation VeryfyEmail($otp: String!) {
        verifyEmail(otp: $otp) {
            isVerified
        }
    }
`

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        customLogin(password: $password, username: $username) {
            token
        }
    }
`

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($password: String!) {
        changePassword(password: $password) {
            status
        }
    }
`
export const GENERATE_OTP = gql`
    mutation GenerateOTP($username: String!) {
        generateOtpForUser(username: $username) {
            status
        }
    }
`
