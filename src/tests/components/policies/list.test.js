import React from 'react';
import { shallow, mount } from 'enzyme';
import PoliciesList from '../../../components/policies/list';
import PoliciesItem from '../../../components/policies/item';

describe('Policies List', () => {
    it('renders a heading and a list of policy items', () => {
        const wrapper = shallow(<PoliciesList />);
        const headingElement = wrapper.find('h2');
        expect(headingElement.text()).toEqual('Insurance policies');
        const listItems = wrapper.find(PoliciesItem);
        expect(listItems.length).toEqual(4);
    });

    it('shows a modal window if Edit button is clicked on a PoliciesItem', () => {
        const wrapper = mount(<PoliciesList />);
        expect(wrapper.find('.modal').length).toEqual(0);
        wrapper.find('.policies .edit-description').first().simulate('click');
        expect(wrapper.find('.modal').length).toEqual(1);
    });

    it('closes a modal window if close button is closed', () => {
        const wrapper = mount(<PoliciesList />);
        wrapper.find('.policies .edit-description').first().simulate('click');
        expect(wrapper.find('.modal').length).toEqual(1);
        wrapper.find('.modal .close').first().simulate('click');
        expect(wrapper.find('.modal').length).toEqual(0);
    });

    it('closes a modal window if data is entered in input field and Save is pressed', () => {
        const wrapper = mount(<PoliciesList />);
        wrapper.find('.policies .edit-description').first().simulate('click');
        wrapper.find('.input-field').simulate('keyup', { target: { value: 'a' } });
        wrapper.find('.modal .save').simulate('click');
        expect(wrapper.find('.modal').length).toEqual(0);
        expect(wrapper.find('.description').first().text()).toEqual('a ');
    });
});
