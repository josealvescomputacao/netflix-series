import React from 'react'
import styled from 'styled-components'

const BodyName = styled.div`
.fa{
    padding-top: 10px
}
`

const Name = (props) => {
    return (
        <BodyName>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text fa fa-user" aria-hidden='true'></span>
                </div>
                <input autoComplete="on" onChange={props.handleChange('name')} type="text" placeholder='Full Name' className="form-control"/>
            </div>
        </BodyName>
    )
}
export default Name