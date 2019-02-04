import { put } from 'redux-saga/effects'
import ActionCreator from '../actionCreators'
import axios from 'axios'

export function* getComments(auth, database){
    const data = {}
    try{ 
        const user = yield auth.currentUser
        const {ra} = user
        const datas = yield new Promise(resolve => {
            resolve(axios.post('/auth?token='+ra)) 
        })
        if (datas.data === user.uid){
            const comments =  database.ref('comments')
            yield comments.once('value', snapshot => {
                data.comments = snapshot.val()
            })
            yield put(ActionCreator.getCommentsSuccess(data.comments))
        }else{
            yield put(ActionCreator.getCommentsFailure(datas.data))
        }   
    }catch({message}){
        yield put(ActionCreator.getCommentsFailure(message))
    }
    
}


export function* createComment(auth, database, action){  
    try{   
        const user = yield auth.currentUser
        const {ra} = user
        const data = yield new Promise(resolve => {
            resolve(axios.post('/auth?token='+ra)) 
        })
        if (data.data === user.uid){
            const id = yield database.ref().child("comments").push().key
            const newcomment = {}
            const comment = action.comment.newcomment
            newcomment['comments/'+id] = {
                id,
                idUser: user.uid,
                comment,
                email : user.email,
                date: action.comment.date
            }
            yield database.ref().update(newcomment)
            yield put(ActionCreator.createCommentSuccess(newcomment))
        }else{
            yield put(ActionCreator.createCommentFailure(data.data))
        }
    }catch({message}){
        yield put(ActionCreator.createCommentFailure(message))
    } 
}

export function* removeComment(auth, database, action){ 
    try{
        const user = auth.currentUser
        const {ra} = user
        const data = yield new Promise(resolve => {
            resolve(axios.post('/auth?token='+ra))
        })
        if (data.data === user.uid){
            const {comment} = action
            const url = `comments/${comment}`
            yield database.ref(url).remove()   
            yield put(ActionCreator.removeCommentSuccess(comment))
        }else{
            yield put(ActionCreator.removeCommentFailure(data.data))
        }
    }catch({message}){
        yield put(ActionCreator.removeCommentFailure(message))
    } 
}

