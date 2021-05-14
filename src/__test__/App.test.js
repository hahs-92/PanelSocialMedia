import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'

//COMPONENTE
import App from '../App'

//CONTEXT
import AppContext from '../context/AppContext'


describe('<App />', () => {
    const addItem = jest.fn()
    test('Render App', () => {
        const app = shallow(
            <AppContext.Provider value={{ addItem }}>
                <App />
            </AppContext.Provider>
        )
        expect(app.length).toEqual(1)
    })
})

describe('App Snapshot', () => {
    test('Checking App UI', () => {
        const addItem = jest.fn()
        const app = create(
            <AppContext.Provider value={{ addItem }}>
                <App/>
            </AppContext.Provider>
        )
        expect(app.toJSON()).toMatchSnapshot()
    })
})

