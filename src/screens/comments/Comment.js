import React, {Fragment, Component} from 'react'


class Comment extends Component {

    state = {
        newcomment: ''
    }   
  
    remove = comment => {
        this.props.removeComment(comment)
    }
 
    renderComments = comment => {
        return(
            <Fragment key={comment.id}>
                <div className="bg-light card mb-3" >
                    <div className="card-header">
                        <p className="text-muted h6">Commented for: <span className="text-danger">{comment.email}</span></p>
                    </div>
                    <div className="card-body">
                        <span className="text-primary h4">{comment.comment}</span><br/><br/>
                        {this.props.user.email === comment.email &&  
                            <div>
                                <button type='button' className='btn btn-danger d-flex mx-auto' onClick={() => this.remove(comment.id)}>Deletar</button>
                            </div>
                        }              
                    </div>
                    <div className="card-footer">
                        Written: <span>{comment.date}</span>
                    </div>
                </div>
            </Fragment>
        )
    }
   
    render(){
        const keys = Object.keys(this.props.comments)
        return(  
            <div className="container">
                {keys.map((value,key) => key !== keys.length ? this.renderComments(this.props.comments[keys[keys.length-(key+1)]]): null)}  
            </div>
        )
    }

}

export default Comment 
