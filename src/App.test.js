import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};


describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "example title",
                body: "some text",
            }, {
                title: "example title 2",
                body: "some text",
            }, {
                title: "example title 3",
                body: "some text",
            }]
        };
        wrapper = setUp(initialState);
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
    
})