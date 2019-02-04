import React, {Component, Fragment} from 'react'

class NewComment extends Component{
    state = {
        newcomment : ''
    }
    handleChange = event => {
        this.setState({
            newcomment: event.target.value
        })
    }
    sendComment = date => {
        this.props.sendComment(this.state.newcomment, date)
        this.setState({
            newcomment: ''
        })
    }
    render(){
        let date = new Date()
        date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        return(
            <Fragment>
                <textarea className='container col-6 form-control' placeholder='Write your comment...' value={this.state.newcomment} onChange={this.handleChange}></textarea>
                <button className="btn btn-primary mt-5 mb-5" onClick={() => this.sendComment(date)}>Send</button>
            </Fragment>
        )
    }
    
}

export default NewComment
