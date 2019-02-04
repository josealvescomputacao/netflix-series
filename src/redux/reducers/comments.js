import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'


export const INITIAL_STATE = {
    isLoadding: false,
    saved: false,
    data: {},
    error: false,
    errorMessage: ''
}

export const getCommentsRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: true,
        saved: false,
        error: false,
        errorMessage: ''
    }
}
export const getCommentsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: false,
        data: action.comments
    }
}
export const getCommentsFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error
    }
}

export const createCommentRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        error: false,
        errorMessage: '',
        isLoadding: true
    }
}
export const createCommentSuccess = (state = INITIAL_STATE, action) => {
    const comment = action.comment
    return {
        ...state,
        isLoadding: false,
        saved: true,
        data: {...state.data, comment}
    }
}
export const createCommentFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error
    }
}


export const removeCommentRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true,
        errorMessage: '',
        saved: false,
        isLoadding: true,
    }
}
export const removeCommentSuccess = (state = INITIAL_STATE, action) => {
    let newComments = {}
    Object.keys(state.data).map(value => value !== action.comment.newcomment ? newComments = {...newComments, [value] : state.data[value]} : null)
    return {
        ...state,
        isLoadding: false,
        saved: true,
        data: newComments
    }
}
export const removeCommentFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        saved: false,
        error: true,
        errorMessage: action.message,
    }
}


export const destroyComments = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        saved: false,
        data: {},
        error: false,
        errorMessage: '',
    }
}


export const HANDLERS = {
    [Types.GET_COMMENTS_REQUEST]: getCommentsRequest,
    [Types.GET_COMMENTS_SUCCESS]: getCommentsSuccess,
    [Types.GET_COMMENTS_FAILURE]: getCommentsFailure,

    [Types.CREATE_COMMENT_REQUEST]: createCommentRequest,
    [Types.CREATE_COMMENT_SUCCESS]: createCommentSuccess,
    [Types.CREATE_COMMENT_FAILURE]: createCommentFailure,
    
    [Types.REMOVE_COMMENT_REQUEST]: removeCommentRequest,
    [Types.REMOVE_COMMENT_SUCCESS]: removeCommentSuccess,
    [Types.REMOVE_COMMENT_FAILURE]: removeCommentFailure,

    [Types.DESTROY_COMMENTS]: destroyComments,
    
}

export default createReducer(INITIAL_STATE, HANDLERS)