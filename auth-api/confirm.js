'use strict'

const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool

const poolData = {    
    UserPoolId : 'us-east-1_FoSSUMiwG',
    ClientId : '882q85r6rccffkst4nl4aieua' // Your client id here
}

const userPool = new CognitoUserPool(poolData)

module.exports.confirm = (event) => {
    const { username, confirmacion } = event
    console.log(event)
    
    const userData = {
        Username: username,
        Pool: userPool
    }

    const user = new AmazonCognitoIdentity.CognitoUser(userData)

    return new Promise((resolve, reject) => {
        user.confirmRegistration(confirmacion, true, (error, result) => {
            if(error) {
                reject(error.message)
            }

            resolve({
                statusCode: 200,
                body: result
            })
        })
    })
}