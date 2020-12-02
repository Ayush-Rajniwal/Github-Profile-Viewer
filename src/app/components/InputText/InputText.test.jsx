import React from 'react';
import { shallow } from 'enzyme';
import InputText from '@components/InputText';
import { checkProps } from '@utils';

const setup = () => {
    const component = shallow(
        <InputText
            aria-label="Username"
            type="text"
            name="username"
            label="Username"
            placeholder="Profile Name"
        />,
    );
    return component;
};

describe('InputText', () => {
    describe('Render', () => {
        it('It should render', () => {
            const component = setup();
            const wrapper = component.find('.form__field');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Checking Prop Types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                name: '',
                type: 'text',
                label: 'Text',
                placeholder: 'placeholder',
            };
            const propsErr = checkProps(InputText, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});
