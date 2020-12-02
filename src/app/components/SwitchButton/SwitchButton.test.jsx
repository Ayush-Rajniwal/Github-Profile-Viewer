import React from 'react';
import { shallow } from 'enzyme';
import SwitchButton from '@components/SwitchButton';

const setup = (props = {}) => {
    const component = shallow(<SwitchButton {...props} />);
    return component;
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

describe('SwitchButton', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup({
                onChange: () => {},
            });
            const wrapper = component.find('.switch__container');
            expect(wrapper.length).toBe(1);
        });
    });
});
