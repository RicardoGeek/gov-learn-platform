'use strict'

const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool

const poolData = {    
    UserPoolId : 'us-east-1_FoSSUMiwG',
    ClientId : '882q85r6rccffkst4nl4aieua' // Your client id here
}

const userPool = new CognitoUserPool(poolData)

module.exports.login = async (event) => {
    const { username, password } = event
    console.log(event)
    
    const userData = {
        Username: username,
        Pool: userPool
    }

    const authenticationData = {
        Username: username,
        Password: password
    }

    const user = new AmazonCognitoIdentity.CognitoUser(userData)
    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData)

    return new Promise((resolve, reject) => {
        user.authenticateUser(authDetails, {
            onSuccess: (result) => {
                resolve({
                    status: 'success',
                    result
                })
            },
            onFailure: (error) => {
                console.log(error)
                reject(error.message)
            }
        })
    })
    
}