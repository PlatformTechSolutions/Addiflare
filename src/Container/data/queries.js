import {gql} from 'apollo-boost'

export const ME =gql`
    query me {
        me {
            id
        }
    }
`

export const USER_PROFILE = gql`
    query UserProfile($id: Int!) {
        userprofile(id: $id) {
            ispublic
            headerPic
            profilePic
            fullname
            user {
                username
                email
            }
            shortdescription
            occupation
            country
            state
            city
        }
    }
`