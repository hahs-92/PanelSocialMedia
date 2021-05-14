import React from 'react'
import { shallow, mount } from 'enzyme'

//COMPONENTE
import Switch from '../../components/Switch'

//CONTEXT
import AppContext from '../../context/AppContext'


describe('<Switch />', () => {
    test('Render Switch', () => {
        const addItem = jest.fn()
        const switchButton = shallow(
            <AppContext.Provider value={{ addItem }}>
                <Switch />
            </AppContext.Provider>
        )
        expect(switchButton.length).toEqual(1)
    })
    test('Testing button content', () => {
        const darkMode = false
        const setDarkMode = jest.fn()
        const switchButton = mount(
            <AppContext.Provider value={{ darkMode, setDarkMode }}>
                <Switch />
            </AppContext.Provider>
        )
        expect(switchButton.find('button').text()).toEqual('')
    })
})