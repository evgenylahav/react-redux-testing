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

    it('exampleMethod_updatesState method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;

        expect(newState).toBe(true);
    })

    it('exampleMethod_returnsAValue method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(5);

        expect(newValue).toBe(6);
    })

    
})