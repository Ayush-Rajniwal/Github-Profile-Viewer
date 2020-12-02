import React from 'react';
import { shallow } from 'enzyme';
import Profile from '@components/Profile';
import { checkProps } from '@utils';

const setup = (props = {}) => {
    const component = shallow(<Profile {...props} />);
    return component;
};

const props = {
    profile: {
        avatar: '',
        link: '',
        name: '',
        location: '',
        followers: 0,
        following: 0,
        email: '',
        blog: '',
        bio: '',
        username: '',
        isLoggedIn: false,
        loggedInUserName: '',
        followBtn: () => {},
    },
    toggleFollowerList: () => {},
    toggleFollowingList: () => {},
};

describe('Profile', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup({ ...props });
            const wrapper = component.find('.profile__container');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                ...props,
            };
            const propsErr = checkProps(Profile, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
