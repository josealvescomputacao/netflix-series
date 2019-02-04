const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)


exports.auth = functions.https.onRequest((request, response) => {   
    const idToken = request.query.token
    admin.auth().verifyIdToken(idToken)
    .then( decodedToken => {
        response.send(decodedToken.uid)  
        return 
    }).catch( error => {
        response.send(error.errorInfo.code)
        return
    })  
}) 

