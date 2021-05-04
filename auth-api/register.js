'use strict'

const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool

const poolData = {    
    UserPoolId : 'us-east-1_FoSSUMiwG',
    ClientId : '882q85r6rccffkst4nl4aieua' // Your client id here
}

const userPool = new CognitoUserPool(poolData)

module.exports.register = async (event) => {
    const {
        username,
        password,
        email,
        name,
        rol
    } = event
    console.log(event)

    const attributeList = []

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'given_name', Value: name}))
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'nickname', Value: username}))
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'email', Value: email}))
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'custom:rol', Value: rol}))

    return new Promise((resolve, reject) => {
        userPool.signUp(username, password, attributeList, null, (error, result) => {
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