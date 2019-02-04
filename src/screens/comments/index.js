import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ActionCreator from '../../redux/actionCreators'

import Comment from './Comment'
import NewComment from './NewComment'


class ScreensComments extends Component {

    componentDidMount(){
        if (this.props.auth.isAuth){
            this.props.load()
        }
        
    }

    componentDidUpdate(prevProps){
        if (this.props.auth.isAuth && prevProps.comments.data !== this.props.comments.data && this.props.comments.saved){
            this.props.load()
        }
    }

    sendComment = (newcomment, date) => {
        if (newcomment === ''){
            this.props.error('Write a comment!')
            return 
        }
        const comment = {
            newcomment,
            date
        }
        this.props.sendComment(comment)
    }

    
    removeComment = comment => {
        this.props.remove(comment)
    }

    render(){
        return(       
            <div>
                {this.props.auth.isAuth && <NewComment sendComment={this.sendComment} error={this.props.comments.error} errorMessage={this.props.comments.errorMessage}/>}
                {this.props.auth.isAuth && !this.props.comments.isLoadding && this.props.comments.data && <Comment comments={this.props.comments.data} removeComment={this.removeComment} user={this.props.auth.user}/>}
                {!this.props.comments.data && !this.props.comments.isLoadding && <h1 className='text-warning'>None comment added, be first!</h1>}
                {this.props.comments.isLoadding && this.props.auth.isAuth &&
                    <p style={{position: "absolute", width: '100vw', top: '190px'}} className='text-info'>Loadding...</p>
                }
                {this.props.comments.error && this.props.auth.isAuth && 
                    <p style={{position: 'absolute', width: '100vw', top: '190px'}} className='text-danger mt-1 col-12'>{this.props.comments.errorMessage}</p>
                }    
                {!this.props.auth.isAuth && 
                    <h2 className='text-warning'>Do you need is logged in to seeing and written comments! <Link to={'/user/login'}>Login</Link></h2>
                }
            </div>
        )
    }
        
}    


const mapStateToProps = state => {
     return{
        comments : state.comments,
        auth: state.auth
     }
    
}

const mapDispatchToProps = dispatch => {
    return {
        load : () => dispatch(ActionCreator.getCommentsRequest()),
        sendComment : comment => dispatch(ActionCreator.createCommentRequest(comment)),
        remove : comment => dispatch(ActionCreator.removeCommentRequest(comment)),
        error : message => dispatch(ActionCreator.createCommentFailure(message))
    }
   
}
    

export default connect(mapStateToProps, mapDispatchToProps)(ScreensComments)


