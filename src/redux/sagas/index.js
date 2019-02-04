import { takeLatest, all, put} from 'redux-saga/effects'
import ActionCreator, { Types } from '../actionCreators'

import {auth, database} from '../../firebase'

import {login, sendEmail, isAuth, createProfile, newEmail, newPassword, removeProfile, destroyAuth } from './auth'
import {getComments, createComment, removeComment} from './comments'
import {getSeries, createSerie, getSerie, updateSerie, removeSerie} from './series'

let genre = window.location.href.split('/')

//used when we refresh the page for editSeries
let serie = null
if (genre[genre.length-2] === 'Action' || genre[genre.length-2] === 'Drama' || genre[genre.length-2] === 'Comedy'){
    const id = genre[window.location.href.split('/').length-1]
    genre = genre[genre.length-2]
    serie = {genre, id}
}

genre = genre[window.location.href.split('/').length-1]


export default function* rootSaga(){
    const user = yield new Promise(resolve => {
        auth.onAuthStateChanged(user => {
            resolve(user)
        })
    })
    yield all([
        takeLatest(Types.AUTH_REQUEST, isAuth, auth),
        takeLatest(Types.SIGNIN_REQUEST, login, auth),
        takeLatest(Types.SEND_EMAIL_REQUEST, sendEmail, auth),
        takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile, auth, database),
        takeLatest(Types.UPDATE_EMAIL_REQUEST, newEmail, auth),
        takeLatest(Types.UPDATE_PASSWORD_REQUEST, newPassword, auth),
        takeLatest(Types.REMOVE_PROFILE_REQUEST, removeProfile, auth, database),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth, auth),
        
        takeLatest(Types.GET_COMMENTS_REQUEST, getComments, auth, database),
        takeLatest(Types.CREATE_COMMENT_REQUEST, createComment, auth, database),
        takeLatest(Types.REMOVE_COMMENT_REQUEST, removeComment, auth, database),

        takeLatest(Types.GET_SERIES_REQUEST, getSeries, database),
        takeLatest(Types.CREATE_SERIE_REQUEST, createSerie, database),
        takeLatest(Types.GET_SERIE_REQUEST, getSerie, database),
        takeLatest(Types.UPDATE_SERIE_REQUEST, updateSerie, database),
        takeLatest(Types.REMOVE_SERIE_REQUEST, removeSerie, database),
        
        put(ActionCreator.authRequest()),
        put(ActionCreator.getCommentsRequest()),
        (genre === 'Action' || genre === 'Comedy' || genre === 'Drama') && put(ActionCreator.getSeriesRequest(genre, user.uid)),
        serie && put(ActionCreator.getSerieRequest(serie, user.uid))
        
    ])
}