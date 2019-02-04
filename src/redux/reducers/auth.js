import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isAuth: false,
    isLoadding: false,
    isSigningin: false,
    user: {},
    emailChanged: false,
    passwordChanged: false,
    emailSended: false,
    error: false,
    errorMessage: ''
}


export const authRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        errorMessage: ''
    }
}
export const authSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isAuth: true,
        user: action.user
    }
}
export const authFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isAuth: false,
        error: true,
        errorMessage: action.error
    }
}  

 
export const destroyAuthRequest = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: ''
    }
} 
export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isAuth: false,
        passwordChanged: false,
        emailChanged: false,
        user : {}
    }
}  
export const destroyAuthFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: true,
        errorMessage: action.error
    }
}


export const signinRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: true,
        emailSended: false,
        error: false,
        errorMessage: ''
    }
}
export const signinSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningin: false,
        isAuth: true,
        user: action.user,
    }
}
export const signinFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isSigningin: false,
        error: true,
        errorMessage: action.error
    }
}


export const createProfileRequest  = (state = INITIAL_STATE, action) => {
    return {    
        ...state,
        isLoadding: true,
        error: false,
        errorMessage: ''
    }
}
export const createProfileSuccess = (state = INITIAL_STATE, action) => { 
    return {
        ...state,
        isLoadding: false,
        isAuth: true,
        user: action.user,
    }
}
export const createProfileFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        isAuth: false,
        errorMessage: action.error
    }
}
export const sendEmailRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        errorMessage: '',
        emailSended: false,
        isLoadding: true,
    }
}


export const sendEmailSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        emailSended: true,
        isLoadding: false,
    }
}
export const sendEmailFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error,
    }
}


export const updateEmailRequest = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: '',
        emailChanged: false,
        passwordChanged: false,
        isLoadding: true    
    }
}
export const updateEmailSuccess = (state = INITIAL_STATE, action) => { 
    return {
        ...state,
        isLoadding: false,
        emailChanged: true,
    }
}
export const updateEmailFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        emailChanged: false,
        error: true,
        errorMessage: action.error
    }
}


export const updatePasswordRequest = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: '',
        passwordChanged: false,
        emailChanged: false,
        isLoadding: true    
    }
}
export const updatePasswordSuccess = (state = INITIAL_STATE, action) => { 
    return {
        ...state,
        isLoadding: false,
        passwordChanged: true,
    }
}
export const updatePasswordFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        passwordChanged: false,
        error: true,
        errorMessage: action.error
    }
}


export const removeProfileRequest = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: '',
        isLoadding: true    
    }
}
export const removeProfileSuccess = (state = INITIAL_STATE, action) => { 
    return {
        ...state,
        isLoadding: false,
    }
}
export const removeProfileFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error
    }
}
export const resetAuth = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: '',
        isLoadding: false,
        emailChanged: false, 
        emailSended: false,
        passwordChanged: false,
    }
} 


export const HANDLERS = {

    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,

    [Types.SEND_EMAIL_REQUEST]: sendEmailRequest,
    [Types.SEND_EMAIL_SUCCESS]: sendEmailSuccess,
    [Types.SEND_EMAIL_FAILURE]: sendEmailFailure,

    [Types.DESTROY_AUTH_REQUEST]: destroyAuthRequest,
    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,
    [Types.DESTROY_AUTH_FAILURE]: destroyAuthFailure,
    [Types.RESET_AUTH]: resetAuth, //used by: login, register, settings and home


    [Types.SIGNIN_REQUEST]: signinRequest,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,

    [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
    [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
    [Types.CREATE_PROFILE_FAILURE]: createProfileFailure,  

    [Types.UPDATE_EMAIL_REQUEST]: updateEmailRequest,
    [Types.UPDATE_EMAIL_SUCCESS]: updateEmailSuccess,
    [Types.UPDATE_EMAIL_FAILURE]: updateEmailFailure,

    [Types.UPDATE_PASSWORD_REQUEST]: updatePasswordRequest,
    [Types.UPDATE_PASSWORD_SUCCESS]: updatePasswordSuccess,
    [Types.UPDATE_PASSWORD_FAILURE]: updatePasswordFailure,

    [Types.REMOVE_PROFILE_REQUEST]: removeProfileRequest,
    [Types.REMOVE_PROFILE_SUCCESS]: removeProfileSuccess,
    [Types.REMOVE_PROFILE_FAILURE]: removeProfileFailure,
    
}

export default createReducer(INITIAL_STATE, HANDLERS)