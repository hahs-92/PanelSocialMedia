import React from 'react'
import { shallow, mount } from 'enzyme'

//COMPONENTE
import CardInfo from '../../components/CardInfo'

//CONTEXT
import AppContext from '../../context/AppContext'

describe('CardInfo Component', () => {
    const addItem = jest.fn()
    test('Render CardInfo component', () => {
        const cardInfo = shallow(
        <AppContext.Provider value={{ addItem }}>
            <CardInfo />
        </AppContext.Provider>
        )
        expect(cardInfo.length).toEqual(1)
    })
    test('Testing props', () => {
        const cardInfo = mount(
            <AppContext.Provider value={{ addItem }}>
                <CardInfo title='soy un h3' icon='Facebook' amount='10' trend='Up' percentage='6%'/>
            </AppContext.Provider>
        )
        expect(cardInfo.prop('title')).toBe('soy un h3')
        expect(cardInfo.prop('icon')).toBe('Facebook')
        expect(cardInfo.prop('amount')).toBe('10')
        expect(cardInfo.prop('trend')).toBe('Up')
        expect(cardInfo.prop('percentage')).toBe('6%')
    })
})
