import React from 'react'
import styled from 'styled-components'

const BodyEmail = styled.div`
.fa{
    padding-top: 10px
}
#email{
    min-width: 120px    
}
`

const Email = (props) => {
    return (
        <BodyEmail>
        <div className="input-group">
            <div className="input-group-prepend mx-auto">
                <span className="input-group-text fa fa-envelope"></span>   
            </div> 
            <input autoComplete="on" id='email' onChange={props.handleChange('email')} value={props.state.email}  type="email" placeholder='Email' className="form-control"/>
            {props.updateEmail && 
                <div className='mx-auto'>
                    <button type='button' onClick={props.updateEmail} className="btn btn-primary ml-1" data-toggle="tooltip" data-placement="right" title="Change your Email">Change</button>   
                </div>}
        </div>
        </BodyEmail>
    )
}

export default Email