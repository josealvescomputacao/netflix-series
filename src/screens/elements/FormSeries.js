import React from 'react'

import Button from '../../elements/Button'

const statsgenre = {
    '0': 'Action',
    '1': 'Comedy',
    '2': 'Drama'
} 

const statsuser = {
    '0' : 'Watched',
    '1': 'Watching',
    '2': 'Watch' 
}

const FormSeries = (props) => {

    return (   
        <div className='mx-auto' style={{maxWidth:'60%'}}>  
            {!props.series.isLoadding ?
                <Button>
                    Name: <input type="text" value={props.state.name} onChange={props.handleChange('name')} className="form-control" /><br />
                    Status: {<span>&nbsp;</span>} 
                    <select value={props.state.status} onChange={props.handleChange('status')}>
                        <option style={{display:'none'}}>Select</option>
                        {Object.keys(statsuser)
                            .map(key => <option key={key}>{statsuser[key]}</option>)}
                    </select><br/><br/>
                    Genre: {<span>&nbsp;</span>} 
                    <select value={props.state.genre} onChange={props.handleChange('genre')}>
                        <option style={{display:'none'}}>Select</option>
                        {Object.keys(statsgenre)
                            .map(key => <option key={key}>{statsgenre[key]}</option>)}
                    </select><br/><br/>
                    Notes: <textarea type='text' value={props.state.notes} onChange={props.handleChange('notes')} className="form-control"></textarea><br />
                    <button className="button button2 mt-4" type="button" onClick={() => props.saveSeries()}>Save</button>
                </Button> :
                <p className='text-info'>Waitting...</p>
            }
        </div>
    )
}

export default FormSeries