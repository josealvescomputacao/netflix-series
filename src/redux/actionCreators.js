import { createActions } from 'reduxsauce' 

export const {
    Types,
    Creators
} = createActions({ 
    
    signinRequest: ['user'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    sendEmailRequest: ['email'],
    sendEmailSuccess: null,
    sendEmailFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: ['error'],

    resetAuth: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,
    destroyAuthFailure: ['error'],
    

    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error'],

    updateEmailRequest: ['email'],
    updateEmailSuccess: ['email'],
    updateEmailFailure: ['error'],

    updatePasswordRequest: ['password'],
    updatePasswordSuccess: null,
    updatePasswordFailure: ['error'],

    removeProfileRequest: ['user'],
    removeProfileSuccess: null,
    removeProfileFailure: ['error'],



    getCommentsRequest: null,
    getCommentsSuccess: ['comments'],
    getCommentsFailure: ['error'],

    createCommentRequest: ['comment'],
    createCommentSuccess: ['comment'],
    createCommentFailure: ['error'],

    removeCommentRequest: ['comment'],
    removeCommentSuccess: ['comment'],
    removeCommentFailure: ['error'],

    destroyComments: null,


    getSeriesRequest: ['genre', 'uid'],
    getSeriesSuccess: ['series'],
    getSeriesFailure: ['error'],


    createSerieRequest: ['serie', 'uid'],
    createSerieSuccess: ['serie'],
    createSerieFailure: ['error'],

   
    getSerieRequest: ['serie', 'uid'],
    getSerieSuccess: ['serie'],
    getSerieFailure: ['error'],
    updateSerieRequest: ['serie','uid'],
    updateSerieSuccess: ['serie'],
    updateSerieFailure: ['error'],

    removeSerieRequest: ['serie','uid'],
    removeSerieSuccess: ['serie'],
    removeSerieFailure: ['error'],

    destroySeries: null,

    resetSeries: null
})


export default Creators