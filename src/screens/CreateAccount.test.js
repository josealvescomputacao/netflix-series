import React from 'react'

import {ScreensCreateAccount} from './CreateAccount'

describe('Testing CreateAccount Component', () => {
    const props = {
        reset: jest.fn(),
        auth: {
            isAuth: false,
            isLoadding: false
        }
    }
    it('should render correctly with props and empty state', () => {
        const wrapper = shallow(<ScreensCreateAccount {...props}/>)
        
        expect(wrapper.state().name).toEqual('')
        expect(wrapper.state().email).toEqual('')
        expect(wrapper.state().password).toEqual('')
        expect(wrapper.state().passwordConfirm).toEqual('')
        
        expect(wrapper).toMatchSnapshot()
    })
})    


