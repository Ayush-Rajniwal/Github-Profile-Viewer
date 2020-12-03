import React from 'react';
import { shallow } from 'enzyme';
import IconText from '@components/IconText';
import { checkProps } from '@utils';

const setup = () => {
    const component = shallow(
        <IconText className="profile__username" text="username">
            <i className="icon icon-at-symbol" />
        </IconText>,
    );
    return component;
};

describe('IconText', () => {
    describe('Render', () => {
        it('It should render', () => {
            const component = setup();
            const wrapper = component.find('.iconText');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                className: 'myClass',
                text: 'myText',
                children: ['text'],
            };
            const propsErr = checkProps(IconText, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
