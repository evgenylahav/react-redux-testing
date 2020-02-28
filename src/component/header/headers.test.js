import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAttr} from './../../../utils'

const setUp = (props={}) => {
    return shallow(<Header {...props}/>);
};

describe("Header Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("should render without errors", () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });
    it("should render the logo without errors", () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});
