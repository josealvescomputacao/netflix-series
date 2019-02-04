import { put, call } from 'redux-saga/effects'
import ActionCreator from '../actionCreators'

export function* login(auth, action){
    try{
        const {signInWithEmailAndPassword} = auth
        const {email, password} = action.user
        const user = yield call([auth, signInWithEmailAndPassword], email, password)
        //const user = yield auth.signInWithEmailAndPassword(email, passwd)
        yield put(ActionCreator.signinSuccess(user.user))
    }catch({message}){
        yield put(ActionCreator.signinFailure("Dind't have possible do login"))
    }        
}

export function* sendEmail(auth, action){
    try{
        const {sendPasswordResetEmail} = auth
        yield call([auth, sendPasswordResetEmail], action.email)
        yield put(ActionCreator.sendEmailSuccess())
    }catch({message}){
        yield put(ActionCreator.sendEmailFailure(message))
    }        
}


export function* isAuth(auth) {
    try{
        /*
        const user = yield new Promise(resolve => {
            auth.onAuthStateChanged(user => {
                resolve(user)
            })
        })             the top option works too*/
        const wrapper = {
            authFunction : () => auth.currentUser
        }
        const {authFunction} = wrapper
        const user = yield call([wrapper, authFunction])
        if (user !== null){
            yield put(ActionCreator.authSuccess(user))
        } 
    }catch({message}){
        yield put(ActionCreator.authFailure(message))
    } 
}


export function* createProfile(auth, database, action){
    try{
        const {createUserWithEmailAndPassword} = auth
        const {email, passwd} = action.user
        const user = yield call([auth, createUserWithEmailAndPassword], email, passwd)
        
        const {uid} = user.user 
        const pathUser = `users/${uid}`
        const newCadaster = {
            name :action.user.name,
            series: {Action:[''],Comedy:[''],Drama:['']}
        }
        const {ref} = database
        const result = yield call([database,ref], pathUser) 
        const {update} = database.ref()
        yield call([result, update], newCadaster)
        //yield database.ref(pathUser).update(newCadaster) 
        
        yield put(ActionCreator.createProfileSuccess(user.user))
        
        yield login(auth, action) //or the option below, but this mothod is already tested
        //yield auth.signInWithEmailAndPassword(action.user.email, action.user.passwd)
    }catch({message}){
         yield put(ActionCreator.createProfileFailure(message))      
    }     
}

export function* newEmail(auth, action){
    try{
        const {updateEmail} = auth.currentUser
        yield call([auth.currentUser, updateEmail], action.email)
        yield put(ActionCreator.updateEmailSuccess(action.email))
    }catch({message}){
        yield put(ActionCreator.updateEmailFailure(message))
    }
}

export function* newPassword(auth, action){
    try{
        const {updatePassword} = auth.currentUser
        yield call([auth.currentUser, updatePassword], action.password)
        yield put(ActionCreator.updatePasswordSuccess())
    }catch({message}){
         yield put(ActionCreator.updatePasswordFailure(message)) 
    }
}
  
export function* removeProfile(auth, database, action){
    try{  
        const url = `/users/${action.user.uid}` 

        const {ref} = database
        const result = yield call([database, ref], url)
        const {remove} = database.ref() 
        yield call([result, remove])      

        const deleteFunction = () => action.user.delete()
        yield call([action.user, deleteFunction])

        //yield action.user.delete() && database.ref(url).remove()
        yield put(ActionCreator.removeProfileSuccess()) 
        yield destroyAuth(auth)  
    }catch({message}){
         yield put(ActionCreator.removeProfileFailure(message))      
    }     
}

export function* destroyAuth(auth){
    try{
        const {signOut} = auth
        yield call([auth, signOut])
        yield put(ActionCreator.destroyAuthSuccess())
    }catch({message}){
        yield put(ActionCreator.destroyAuthFailure(message))
    }  
} 



