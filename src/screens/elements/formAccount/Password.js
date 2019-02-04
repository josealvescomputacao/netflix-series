import React from 'react'
import styled from 'styled-components'

const BodyPassword = styled.div`
.fa{
    padding-top: 10px
}
`
const Password = (props) => { 
    return (
        <BodyPassword>
            <div className='input-group'>
                <div className="input-group-prepend">
                    <span className="input-group-text fa fa-key"></span>
                </div>
                <input type="password" autoComplete="on" id='password' value={props.state.password} placeholder='Password' onChange={props.handleChange('password')} className="form-control"/> 
            </div>
        </BodyPassword>
    )
}

export default Password