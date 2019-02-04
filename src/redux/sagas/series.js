import { put } from 'redux-saga/effects'
import ActionCreator from '../actionCreators'

export function* getSeries(database, action){
    const data = {}
    try{ 
        const series = database.ref(`users/${action.uid}/series/${action.genre}`)
        yield series.once('value', snapshot => {
            data.series = snapshot.val()
        })
        yield put(ActionCreator.getSeriesSuccess(data.series))
    }catch({message}){
        yield put(ActionCreator.getSeriesFailure(message))
    }
}

export function* createSerie(database, action){
    const serie = {
        ...action.serie
    }
    try{
        const id = yield database.ref().child(`users/${action.uid}/series/${serie.genre}`).push().key
        const newSerie = {}
        newSerie[`users/${action.uid}/series/${serie.genre}/`+id] = { 
            id,
            name : serie.name,
            status : serie.status,
            genre : serie.genre,
            notes : serie.notes
        }
        yield database.ref().update(newSerie)
        yield put(ActionCreator.createSerieSuccess(newSerie))
    }catch({message}){
        yield put(ActionCreator.createSerieFailure('Não foi possivel adicionar a série'))
    }
    
}

export function* getSerie(database, action){   
    try{
        const data = {}
        const serie = database.ref(`users/${action.uid}/series/${action.serie.genre}/${action.serie.id}`)
        yield serie.once('value', snapshot => {
            data.serie = snapshot.val()
        })
        yield put(ActionCreator.getSerieSuccess(data.serie))
    }catch({message}){
        yield put(ActionCreator.getSerieFailure('Não foi possivel carregar as séries'))
    }   
}
export function* updateSerie(database, action){   
    try{  
        const url = `users/${action.uid}/series/${action.serie.genre}/${action.serie.id}`
        yield database.ref(url).update(action.serie) 
        const newSerie = {[action.serie.id] : {...action.serie}}
        yield put(ActionCreator.updateSerieSuccess(newSerie))
    }catch({message}){
        yield put(ActionCreator.updateSerieFailure('Não foi possivel atualizar a séries'))
    }
    
}

export function* removeSerie(database, action){
    const serie = {...action.serie}
    try{
        const url = `users/${action.uid}/series/${serie.genre}/${serie.id}`
        yield database.ref(url).remove()
        yield put(ActionCreator.removeSerieSuccess(serie.id))
        const newAction = {
            genre: serie.genre,
            uid: action.uid
        }
        yield getSeries(database, newAction)
    }catch({message}){
        yield put(ActionCreator.removeSerieFailure('Não foi possivel remover a série'))
    }  
}
