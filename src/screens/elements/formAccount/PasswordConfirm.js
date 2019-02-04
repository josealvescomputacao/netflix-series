import React from 'react'
import styled from 'styled-components'

const BodyPasswordConfirm = styled.div`
.fa{
    padding-top: 10px
}
#passwordConfirm{
    min-width:120px
}
`

const PasswordConfirm = (props) => {
    return(
        <BodyPasswordConfirm>
            <div className='input-group'>
                <div className="input-group-prepend mx-auto">
                    <span className="input-group-text fa fa-key"></span>
                </div>
                <input  type="password" autoComplete="on" value={props.state.passwordConfirm} id='passwordConfirm' placeholder='Confirm Password' onChange={props.handleChange('passwordConfirm')}  className="form-control"/>
                {props.updatePassword && 
                    <div className='mx-auto'>
                        <button type='button' onClick={props.updatePassword} className="btn btn-primary ml-1" data-toggle="tooltip" data-placement="right" title="Change your Password">Change</button>
                    </div>
                }
            </div>
        </BodyPasswordConfirm>
    )
}

export default PasswordConfirm