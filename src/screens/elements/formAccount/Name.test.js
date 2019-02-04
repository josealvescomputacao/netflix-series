import React from 'react'

import Name from './Name'


it('should render correctly', () => {
    const props = {
        handleChange : jest.fn()
    }
    const wrapper = shallow(<Name {...props}/>)
    expect(wrapper).toMatchSnapshot()
})

it('should pass a selected value to the handleChange', () => {
    const props = {
        handleChange : jest.fn(),
        value: 'name'
    }
    const wrapper = shallow(<Name {...props}/>)
    expect(props.handleChange).toBeCalledWith(props.value)
    expect(wrapper).toMatchSnapshot()
})


