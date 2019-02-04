import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { render, shallow, mount } from 'enzyme'
Enzyme.configure({adapter: new Adapter()})

global.render = render
global.shallow = shallow
global.mount = mount




//this component prepear the ambient of tests