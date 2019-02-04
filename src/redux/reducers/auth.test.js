import createReducer, {INITIAL_STATE} from './auth'
import ActionCreator from '../actionCreators'

const state = INITIAL_STATE

//state and all actions about auth was tested


test('authRequest reducer', () =>{
    const action = ActionCreator.authRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '' 
    })   
    expect(action.type).toBe('AUTH_REQUEST')
})
test('authSuccess reducer', () => {
    const user = undefined
    const action =  ActionCreator.authSuccess(user)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isAuth: true,
        user
    })
    expect(action).toEqual({
        type:'AUTH_SUCCESS',
        user: undefined
    })
})
test('authFailure reducer', () => {
    const error = true
    const action =  ActionCreator.authFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isAuth: false,
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'AUTH_FAILURE',
        error: true
    })
})



test('DestroyAuthRequest reducer', () =>{
    const action = ActionCreator.destroyAuthRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: ''
    })   
    expect(action.type).toBe('DESTROY_AUTH_REQUEST')
})
test('DestroyAuthSuccess reducer', () => {
    const action =  ActionCreator.destroyAuthSuccess()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isAuth: false,
        passwordChanged: false,
        emailChanged: false,
        user : {}
    })
    expect(action.type).toBe('DESTROY_AUTH_SUCCESS')
})
test('DestroyAuthFailure reducer', () => {
    const error = true
    const action =  ActionCreator.destroyAuthFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isAuth: false,
        user : {},
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'DESTROY_AUTH_FAILURE',
        error: true
    })
})



test('signinRequest reducer', () =>{
    const action = ActionCreator.signinRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isSigningin: true,
        error: false,
        errorMessage: ''
    })   
    expect(action.type).toBe('SIGNIN_REQUEST')
})
test('signinSuccess reducer', () => {
    const user = undefined
    const action =  ActionCreator.signinSuccess(user)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isSigningin: false,
        isAuth: true,
        user: action.user
    })
    expect(action.type).toBe('SIGNIN_SUCCESS')
})
test('signinFailure reducer', () => {
    const error = true
    const action =  ActionCreator.signinFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isSigningin: false,
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'SIGNIN_FAILURE',
        error: true
    })
})



test('createProfileRequest reducer', () =>{
    const action = ActionCreator.createProfileRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: true,
        error: false,
        errorMessage: ''
    })   
    expect(action.type).toBe('CREATE_PROFILE_REQUEST')
})
test('createProfileSuccess reducer', () => {
    const user = undefined
    const action =  ActionCreator.createProfileSuccess(user)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isSigningin: false,
        isAuth: true,
        user: action.user,
    })
    expect(action).toEqual({
        type:'CREATE_PROFILE_SUCCESS',
        user: undefined
    })
})
test('createProfileFailure reducer', () => {
    const error = true
    const action =  ActionCreator.createProfileFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        error,
        isAuth: false,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'CREATE_PROFILE_FAILURE',
        error: true
    })
})



test('sendEmailRequest reducer', () =>{
    const action = ActionCreator.sendEmailRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '',
        isLoadding: true,
        emailSended: false,
    })   
    expect(action.type).toBe('SEND_EMAIL_REQUEST')
})
test('sendEmailSuccess reducer', () => {
    const action =  ActionCreator.sendEmailSuccess()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        emailSended: true,
    })
    expect(action.type).toBe('SEND_EMAIL_SUCCESS')
})
test('sendEmailFailure reducer', () => {
    const error = true
    const action =  ActionCreator.sendEmailFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        error,
        errorMessage: action.error,
    })
    expect(action).toEqual({
        type: 'SEND_EMAIL_FAILURE',
        error: true
    })
})



test('updateEmailRequest reducer', () =>{
    const action = ActionCreator.updateEmailRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '',
        emailChanged: false,
        passwordChanged: false,
        isLoadding: true   
    })   
    expect(action.type).toBe('UPDATE_EMAIL_REQUEST')
})
test('updateEmailSuccess reducer', () => {
    const action =  ActionCreator.updateEmailSuccess()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        emailChanged: true,
    })
    expect(action.type).toBe('UPDATE_EMAIL_SUCCESS')
})
test('updateEmailFailure reducer', () => {
    const error = true
    const action =  ActionCreator.updateEmailFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        emailChanged: false,
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'UPDATE_EMAIL_FAILURE',
        error: true
    })
})



test('updatePasswordRequest reducer', () =>{
    const action = ActionCreator.updatePasswordRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '',
        passwordChanged: false,
        emailChanged: false,
        isLoadding: true   
    })   
    expect(action.type).toBe('UPDATE_PASSWORD_REQUEST')
})
test('updatePasswordSuccess reducer', () => {
    const action =  ActionCreator.updatePasswordSuccess()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        passwordChanged: true,
    })
    expect(action.type).toBe('UPDATE_PASSWORD_SUCCESS')
})
test('updatePasswordFailure reducer', () => {
    const error = true
    const action =  ActionCreator.updatePasswordFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        passwordChanged: false,
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'UPDATE_PASSWORD_FAILURE',
        error: true
    })
})



test('removeProfileRequest reducer', () =>{
    const action = ActionCreator.removeProfileRequest()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '',
        isLoadding: true    
    })   
    expect(action.type).toBe('REMOVE_PROFILE_REQUEST')
})
test('removeProfileSuccess reducer', () => {
    const action =  ActionCreator.removeProfileSuccess()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
    })
    expect(action.type).toBe('REMOVE_PROFILE_SUCCESS')
})
test('removeProfileFailure reducer', () => {
    const error = true
    const action =  ActionCreator.removeProfileFailure(error)
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        isLoadding: false,
        error,
        errorMessage: action.error
    })
    expect(action).toEqual({
        type: 'REMOVE_PROFILE_FAILURE',
        error: true
    })
})



test('resetAuth reducer', () => {
    const action =  ActionCreator.resetAuth()
    const newState = createReducer(state, action)
    expect(newState).toEqual({
        ...INITIAL_STATE,
        error: false,
        errorMessage: '',
        emailChanged: false,
        emailSended: false,
        passwordChanged: false,
    })
    expect(action.type).toBe('RESET_AUTH')
})

