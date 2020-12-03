import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '@components/SearchBar';
import { checkProps } from '@utils';

const setup = (props = {}) => {
    const component = shallow(<SearchBar {...props} />);
    return component;
};

describe('SearchBar', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup({
                onChange: () => {},
            });
            const wrapper = component.find('.searchBar');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                onChange: () => {},
            };
            const propsErr = checkProps(SearchBar, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
