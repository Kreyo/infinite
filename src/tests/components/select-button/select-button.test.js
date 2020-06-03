import React from 'react';
import { shallow } from 'enzyme';
import SelectButton from "../../../components/select-button";

const sampleActions = [
    {
        label: 'action 1',
        onClick: () => {},
    },
    {
        label: 'action 2',
        onClick: () => {},
    }
];

describe('Select Button', () => {
    it('renders a button with a select', () => {
        const wrapper = shallow(<SelectButton label="test" primaryLink="#" isPrimary={false} actions = {sampleActions} />);
        expect(wrapper.find('.select').length).toEqual(1);
        expect(wrapper.find('.button').length).toEqual(1);
        expect(wrapper.find('.select-button').hasClass('primary')).toEqual(false);
        expect(wrapper.find('.select-button').hasClass('no-actions')).toEqual(false);
    });

    it('renders primary classname if primary prop is passed', () => {
        const wrapper = shallow(<SelectButton label="test" primaryLink="#" isPrimary={true} actions = {sampleActions} />);
        expect(wrapper.find('.select-button').length).toEqual(1);
        expect(wrapper.find('.select-button').hasClass('primary')).toEqual(true);
        expect(wrapper.find('.select-button').hasClass('no-actions')).toEqual(false);
    });

    it('renders no-actions classname if actions are empty', () => {
        const wrapper = shallow(<SelectButton label="test" primaryLink="#" isPrimary={false} actions = {[]} />);
        expect(wrapper.find('.select-button').length).toEqual(1);
        expect(wrapper.find('.select-button').hasClass('primary')).toEqual(false);
        expect(wrapper.find('.select-button').hasClass('no-actions')).toEqual(true);
    });
});
