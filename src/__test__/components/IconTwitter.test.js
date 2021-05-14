import React from 'react' 
import { create } from 'react-test-renderer'

//COMPONENTE
import IconTwitter from '../../components/IconTwitter'

//CONTEXT
import AppContext from '../../context/AppContext'


describe('IconTwitter Snapshot', () => {
    test('Checking IconTwitter UI', () => {
        const addItem = jest.fn()
        const iconTwitter = create(
            <AppContext.Provider value={{ addItem }}>
                <IconTwitter/>
            </AppContext.Provider>
        )
        expect(iconTwitter.toJSON()).toMatchSnapshot()
    })
})