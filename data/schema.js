import {resolvers} from './resolvers';
import {makeExecutableSchema} from 'graphql-tools';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }

    type Query {
        getFriends: [Friend]
        getOneFriend(id: ID!): Friend
        getAliens: [Alien]
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String!
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`

export const schema = makeExecutableSchema({typeDefs, resolvers});

