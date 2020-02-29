import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import SharedButton from './index';


describe("SharedButton component", () => {
    describe("Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: "I am a button",
                emitEvent: () => {}
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});