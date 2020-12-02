import React from 'react';
import { shallow } from 'enzyme';
import List from '@components/List';
import { checkProps } from '@utils';

const data = [
    { username: 'username', avatar: '' },
    { username: 'username', avatar: '' },
];

const setup = () => {
    const component = shallow(
        <List
            data={data}
        />,
    );
    return component;
};

describe('List', () => {
    describe('Render', () => {
        it('should render', () => {
            const component = setup();
            const wrapper = component.find('.list');
            expect(wrapper.length).toBe(1);
        });

        it('All list Item render', () => {
            const component = setup();
            const wrapper = component.find('.list__item');
            expect(wrapper.length).toBe(data.length);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                data: [],
            };
            const propsErr = checkProps(List, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
