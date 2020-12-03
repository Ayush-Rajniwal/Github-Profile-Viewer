import React from 'react';
import { shallow } from 'enzyme';
import Loader from '@components/Loader';

const setup = () => {
    const component = shallow(<Loader />);
    return component;
};

describe('Loader', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup();
            const wrapper = component.find('.loader');
            expect(wrapper.length).toBe(1);
        });
    });
});
