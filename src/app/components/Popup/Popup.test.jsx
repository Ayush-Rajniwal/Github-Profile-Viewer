import React from 'react';
import { shallow } from 'enzyme';
import Popup from '@components/Popup';
import { checkProps } from '@utils';

const setup = (props = {}) => {
    const component = shallow(<Popup {...props} />);
    return component;
};

describe('Popup', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup({ title: 'Title', children: ['Message'], onClick: () => {} });
            const wrapper = component.find('.popup');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Title',
                children: ['Message'],
                onClick: () => {},
            };
            const propsErr = checkProps(Popup, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
