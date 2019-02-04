import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoadding: false,
    saved: false,
    data: {},
    serie: {},
    error: false,
    errorMessage: ''
}

export const getSeriesRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: true,
        saved: false,          //when we create or update a serie, is redirect for Serie Component and saved will be falsy
        error: false,
        errorMessage: ''     
    }
}
export const getSeriesSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: false,
        data: action.series
    }
}
export const getSeriesFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false, 
        error: true,
        errorMessage: action.error
    }
}




export const createSerieRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        errorMessage: '',
        isLoadding: false, 
    }
}
export const createSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: false, 
        saved: true,
        data: action.serie
    }
}
export const createSerieFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,  
        error: true,
        errorMessage: action.error
    }
}


export const getSerieRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: {},
        isLoadding: true,
        error: false,
        errorMessage: ''
    }
}
export const getSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: false,
        serie: action.serie
    }
}
export const getSerieFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error
        
    }
}
export const updateSerieRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: true,
        error: false,
        errorMessage: ''
    }
}
export const updateSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: false,
        saved: true,
        //data: action.serie,
        error: false,
        errorMessage: '',
        //serie: {},
    }
}
export const updateSerieFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: true,
        errorMessage: action.error
    }
}


export const removeSerieRequest  = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadding: true,
        error: false,
        errorMessage: '',
    }
}
export const removeSerieSuccess = (state = INITIAL_STATE, action) => {
    let newSeries = {}
    Object.keys(state.data).map(value => value !== action.serie ? newSeries = {...newSeries, [value] : action.data[value]} : null)
    return {
        ...state,
        isLoadding: false,
        data: newSeries
    }
}
export const removeSerieFailure = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        error: true,
        errorMessage: action.error   
    }
}


export const destroySeries = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        isLoadding: false,
        data: {},
        serie : {},
        error: false,
        errorMessage: '' 
    }
}

export const resetSeries = (state = INITIAL_STATE, action) => {
    return{
        ...state,
        error: false,
        errorMessage: '',
        isLoadding: false,
    }
} 


export const HANDLERS = {
    [Types.GET_SERIES_REQUEST]: getSeriesRequest,
    [Types.GET_SERIES_SUCCESS]: getSeriesSuccess,
    [Types.GET_SERIES_FAILURE]: getSeriesFailure,

    [Types.CREATE_SERIE_REQUEST]: createSerieRequest,
    [Types.CREATE_SERIE_SUCCESS]: createSerieSuccess,
    [Types.CREATE_SERIE_FAILURE]: createSerieFailure,

    [Types.GET_SERIE_REQUEST]: getSerieRequest,
    [Types.GET_SERIE_SUCCESS]: getSerieSuccess,
    [Types.GET_SERIE_FAILURE]: getSerieFailure,
    [Types.UPDATE_SERIE_REQUEST]: updateSerieRequest,
    [Types.UPDATE_SERIE_SUCCESS]: updateSerieSuccess,
    [Types.UPDATE_SERIE_FAILURE]: updateSerieFailure,

    [Types.REMOVE_SERIE_REQUEST]: removeSerieRequest,
    [Types.REMOVE_SERIE_SUCCESS]: removeSerieSuccess,
    [Types.REMOVE_SERIE_FAILURE]: removeSerieFailure,

    [Types.DESTROY_SERIES]: destroySeries,

    [Types.RESET_SERIES]: resetSeries //used for newSerie, because it doesn't call any function in didMoutn
}

export default createReducer(INITIAL_STATE, HANDLERS)
