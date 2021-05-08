const AWS = require('aws-sdk')
const fs = require('fs')

const translate = new AWS.Translate(aws_keys.translation)
const polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})


const doTranslation = async (message) => {
    const { language, target, text} = message

    const params = {
        SourceLanguageCode: language,
        TargetLanguageCode: target,
        Text: text
    }

    const result = await translate.translateText(params).promise()
    return result
}

const text2speech = async (payload) => {
    let params = {
        'Text': payload.text,
        'OutputFormat': 'mp3',
        'VoiceId': 'Kimberly'
    }

    const speech = await polly.synthesizeSpeech(params).promise()
        .catch((iaError) => {
            console.log(iaError)
            return iaError
        })
    
    const fileName = getRandomString() + '.mp3'

    fs.write('/var/www/html/uploads/'+fileName, speech, (error) => {
        if(error) {
            console.log(error)
            return error
        }

        return {
            output: '/var/www/html/uploads/' + fileName
        }
    })
}

const getRandomString = () => Math.random().toString(36).substring(7).toUpperCase()

module.exports = {
    doTranslation,
    text2speech
}