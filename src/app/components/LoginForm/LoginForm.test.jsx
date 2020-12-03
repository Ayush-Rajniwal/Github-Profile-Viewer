import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '@components/LoginForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

const setup = () => {
    const component = shallow(<LoginForm />);
    return component;
};

describe('LoginForm', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup();
            const wrapper = component.find('.form');
            expect(wrapper.length).toBe(1);
        });
    });
});
