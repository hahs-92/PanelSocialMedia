import React from 'react'
import { shallow, mount } from 'enzyme'

//COMPONENTE
import CardMain from '../../components/CardMain'

//CONTEXT
import AppContext from '../../context/AppContext'

describe('<CardMain />', () => {
    const addItem = jest.fn()
    test('Render CardMain component', () => {
        const cardMain = shallow(
        <AppContext.Provider value={{ addItem }}>
            <CardMain />
        </AppContext.Provider>
        )
        expect(cardMain.length).toEqual(1)
    })
    test('Testing props', () => {
        const cardMain = mount(
            <AppContext.Provider value={{ addItem }}>
                <CardMain title='soy un h3' icon='Facebook' amountFollowers='10' trend='Up' user='alex' number='6'/>
            </AppContext.Provider>
        )
        expect(cardMain.prop('title')).toBe('soy un h3')
        expect(cardMain.prop('icon')).toBe('Facebook')
        expect(cardMain.prop('amountFollowers')).toBe('10')
        expect(cardMain.prop('trend')).toBe('Up')
        expect(cardMain.prop('user')).toBe('alex')
        expect(cardMain.prop('number')).toBe('6')
    })
    test('Testing text content',() => {
        const cardMain = mount(
            <AppContext.Provider value={{ addItem }}>
                <CardMain />
            </AppContext.Provider>
        )
        expect(cardMain.text()).toEqual(' Today')
    })
})

