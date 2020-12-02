import React from 'react';
import { shallow } from 'enzyme';
import FollowCard from '@components/FollowCard';
import { checkProps } from '@utils';

const setup = () => {
    const component = shallow(
        <FollowCard
            data-id="name"
            avatar=""
            username="Name"
            onFollow={() => {}}
            onRemove={() => {}}
        />,
    );
    return component;
};

describe('FollowCard', () => {
    describe('Render', () => {
        it('It should render', () => {
            const component = setup();
            const wrapper = component.find('.followCard');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                avatar: '',
                username: 'Name',
                onFollow: () => {},
                onRemove: () => {},
            };
            const propsErr = checkProps(FollowCard, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
