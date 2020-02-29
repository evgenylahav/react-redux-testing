import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import ListItem from './index';


describe("ListItem component", () => {
    describe("Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "First article",
                desc: "hahahahahahaha",
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render a listItem', () => {
            const listItem = findByTestAttr(wrapper, 'listItemComponent');
            expect(listItem.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'componentDescription');
            expect(desc.length).toBe(1);
        });
    });

    describe("should not render", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "hahahahahahaha",
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render null', () => {
            const listItem = findByTestAttr(wrapper, 'listItemComponent');
            expect(listItem.length).toBe(0);
        });
    });
});