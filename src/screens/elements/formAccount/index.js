import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import Button from '../../../elements/Button'
import Name from './Name'
import Email from './Email'
import Password from './Password'
import PasswordConfirm from './PasswordConfirm'


const FormAccount = (props) => { 
    let val = '12'
    return(
        <Fragment>
            <div className='mx-auto' style={{width: '50%'}}> 
                {props.createAccount && <div className='mb-5'><Name handleChange={props.handleChange}/></div>}
                <div className='mb-5'><Email state={props.state} handleChange={props.handleChange} updateEmail={props.updateEmail}/></div>
                {((props.createAccount && (val = 6)) || props.login || props.removeProfile) && 
                    <div className='row mb-3'>
                        <div className={`col-lg-${val} mb-5`}><Password state={props.state} handleChange={props.handleChange}/></div>
                        {!props.login && 
                            <div className={`col-lg-${val}`}><PasswordConfirm state={props.state} handleChange={props.handleChange} updatePassword={props.updatePassword}/></div>
                        }
                    </div>
                }       
                <Button>
                    {props.createAccount && <button className="button button2" type="button" onClick={props.createAccount}>Create</button>}
                    {props.login && <button type="button" className="button button2" onClick={props.login}>Login</button>}
                    {props.removeProfile && 
                        <section className='mt-5'>
                            <button className='navbar-toggler btn button button3 bg-warning' type="button" data-toggle="collapse" data-target="#delete" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Delete account</button>
                            <div className='collapse navbar-collapse'  id="delete">
                            <ul className="navbar-nav nav-pills my-auto mx-auto" id="componentsList">
                                <li className="nav-item">
                                    <h4 className='text-warning'>Are you sure?</h4>
                                    <Link className='btn btn-danger mr-2' to='/'>No</Link>
                                    <button type='button' className='btn btn-info' onClick={props.removeProfile}>Yes</button>
                                </li>  
                            </ul>    
                            </div>
                        </section>
                    }
                </Button><br/><br/>         
            </div>
        </Fragment>
    )
}

export default FormAccount