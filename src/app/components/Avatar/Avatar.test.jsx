import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '@components/Avatar';
import { checkProps } from '@utils';

describe('Avatar', () => {
    describe('Render', () => {
        it('Avatar renders', () => {
            const component = shallow(<Avatar img="" />);
            const wrapper = component.find('.avatar__wrapper');
            expect(wrapper.length).toBe(2);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                img: '',
            };
            const propsErr = checkProps(Avatar, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
