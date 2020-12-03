import React from 'react';
import { shallow } from 'enzyme';
import Button from '@components/Button';
import { checkProps } from '@utils';

const setup = (props = {}) => {
    const component = shallow(<Button id="btn" className="button--primary" {...props}>Button</Button>);
    return component;
};

describe('Button', () => {
    describe('Render', () => {
        it('Nav button renders', () => {
            const component = setup({ type: 'link' });
            const wrapper = component.find('Link');
            expect(wrapper.length).toBe(1);
        });

        it('Simple Button renders', () => {
            const component = setup({ type: 'button' });
            const wrapper = component.find('button');
            expect(wrapper.length).toBe(1);
            expect(wrapper.children.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                id: 'btn',
                className: '',
                type: '',
                children: ['text'],
            };
            const propsErr = checkProps(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
