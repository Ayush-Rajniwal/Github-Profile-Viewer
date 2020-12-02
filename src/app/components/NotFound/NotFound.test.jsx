import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '@components/NotFound';

const setup = () => {
    const component = shallow(<NotFound />);
    return component;
};

describe('NotFound', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup();
            const wrapper = component.find('.notFound');
            expect(wrapper.length).toBe(1);
        });
    });
});
