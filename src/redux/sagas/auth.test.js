import sagaHelper from 'redux-saga-testing'
import { put, call } from 'redux-saga/effects'

import ActionCreator from '../actionCreators'
import {isAuth, login, createProfile, sendEmail, newEmail, newPassword, destroyAuth, removeProfile} from './auth'


describe('should test isAuth', () => { 
    const auth = {currentUser: undefined}
    const {currentUser} = auth
    const authMock = {
        authFunction: () => currentUser
    }
    const {authFunction} = authMock 

    const it = sagaHelper(isAuth(authMock))
    it('should call api authFunction', result => {
        expect(JSON.stringify(result)).toEqual(JSON.stringify(call([authMock, authFunction])))
        return auth.currentUser
    })
    it('should put authSuccess', result => {
        expect(result).toEqual(put(ActionCreator.authSuccess(auth.currentUser)))
    })
})



describe('should test login', () => {
    const authMock = {
        signInWithEmailAndPassword: jest.fn()
    }
    const {signInWithEmailAndPassword} = authMock
    const action = {
        user:{
            email: undefined,
            passwd: undefined
        }      
    }
    const it = sagaHelper(login(authMock, action))
    it('should call api login', result => {
        expect(result).toEqual(call([authMock, signInWithEmailAndPassword], action.user.email, action.user.passwd))
        return {
            user: {
                user: undefined
            }
        }
    })
    it('should put signinSuccess', result => {
        expect(result).toEqual(put(ActionCreator.signinSuccess({user: undefined})))
    })
})


describe('should test createProfile', () => {
    const actionMock = {
        user:{
            name: undefined,
            email: undefined,
            passwd: undefined
        }      
    }
    const newCadasterMock = {
        name : actionMock.user.name,
        series: {Action:[''],Comedy:[''],Drama:['']}
    }

    const authMock = {
        createUserWithEmailAndPassword: jest.fn()
    }

    const databaseMock = {
        ref: jest.fn()
    }
    
    databaseMock.ref.mockReturnValue({
        update: jest.fn()
    })
    
    const it = sagaHelper(createProfile(authMock, databaseMock, actionMock))
    const {createUserWithEmailAndPassword} = authMock
    it('should call api createUserWithEmailAndPassword', result => {
        expect(result).toEqual(call([authMock, createUserWithEmailAndPassword], actionMock.user.email, actionMock.user.passwd))
        return {
            user: {
                user: {
                    uid: undefined
                }
            }
        }      
    })
    
    const pathUser = 'users/'+undefined
    const {ref} = databaseMock
    
    it('should call api ref from database', result => { 
        expect(result).toEqual(call([databaseMock, ref], pathUser))
        return {
            resultRefFromDatabaseMock: {}
        }
    }) 
    
    const {update} = databaseMock.ref()

    it('should call api update from database', result => {
        expect(result).toEqual(call([{resultRefFromDatabaseMock:{}}, update], newCadasterMock))
    })
    it('should put createProfileSuccess', result => {
       expect(result).toEqual(put(ActionCreator.createProfileSuccess({user:{uid: undefined}})))
       //expect(result).toEqual(put(ActionCreator.createProfileSuccess(undefined)))
    })
})




describe('should test sendEmail', () => {
    const authMock = {
        sendPasswordResetEmail: jest.fn()
    }
    const action = {
        email: undefined
    }
    
    const it = sagaHelper(sendEmail(authMock, action))
    const {sendPasswordResetEmail} = authMock
    it('should call api sendPasswordResetEmail', result => {
        expect(result).toEqual(call([authMock, sendPasswordResetEmail], action.email))
    })
    it('should put sendEmailSuccess', result => {
        expect(result).toEqual(put(ActionCreator.sendEmailSuccess()))
    })
})



describe('should test newEmail', () => {
    const authMock = {
        currentUser: {
            updateEmail: jest.fn()
        }
    }
    const action = {
        email: undefined
    }
    
    const it = sagaHelper(newEmail(authMock, action))
    const {updateEmail} = authMock.currentUser
    it('should call api updateEmail', result => {  
        expect(result).toEqual(call([authMock.currentUser, updateEmail], action.email))
    })
    it('should put updateEmailSuccess', result => {
        expect(result).toEqual(put(ActionCreator.updateEmailSuccess(action.email)))
    })
})



describe('should test newPassword', () => {
    const authMock = {
        currentUser: {
            updatePassword: jest.fn()
        }
    }
    const action = {
        email: undefined
    }
    const it = sagaHelper(newPassword(authMock, action))
    const {updatePassword} = authMock.currentUser
    it('should call api updatePassword', result => {
        expect(result).toEqual(call([authMock.currentUser, updatePassword], action.email))
    })
    it('should put updatePasswordSuccess', result => {
        expect(result).toEqual(put(ActionCreator.updatePasswordSuccess()))
    })
})



describe('should test signOut', () => {
    const authMock = {
        signOut: jest.fn()
    }
    const it = sagaHelper(destroyAuth(authMock))
    const {signOut} = authMock
    it('should call api signOut', result => {
        expect(result).toEqual(call([authMock, signOut]))
    })
    it('should put signingSuccess', result => {
        expect(result).toEqual(put(ActionCreator.destroyAuthSuccess()))
    })
})



describe('should test removeProfile', () => {
    const actionMock = {
        user: {
            uid: undefined,
            delete : jest.fn()
        }
    }
    const deleteFunction = () => actionMock.user.delete()
    
    const url = `/users/${actionMock.user.uid}`
    
    const databaseMock = {
        ref : jest.fn()
    }
    
    databaseMock.ref.mockReturnValue({
        remove: jest.fn()
    })

    const authMock = {}

    const it = sagaHelper(removeProfile(authMock, databaseMock, actionMock))
    
    const {ref} = databaseMock
    it('should call api ref from database', result => {
        expect(result).toEqual(call([databaseMock, ref], url))
        return {
            returnValue: {}
        }
    })
    const {remove} = databaseMock.ref()
    it('should call api remove from database', result => {
        expect(result).toEqual(call([{returnValue: {}}, remove]))      
    })
    
    it('should call api delete user from authentication', result => {
        expect(JSON.stringify(result)).toEqual(JSON.stringify(call([actionMock.user, deleteFunction]))) 
    })  
    it('should put removeProfileSuccess', result => {
        expect(result).toEqual(put(ActionCreator.removeProfileSuccess()))
    }) 
})