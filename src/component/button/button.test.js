import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import SharedButton from './index';


describe("SharedButton component", () => {
    describe("Renders", () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: "I am a button",
                emitEvent: mockFunc,
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');

            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    });
});