import React from 'react';
import { shallow } from 'enzyme';
import PoliciesItem from '../../../components/policies/item';
import policiesMock from '../../../data.json';

const sampleProps = {
    editDescription: jest.fn(),
    item: policiesMock[0],
};

describe('Policies Item', () => {
    it('renders policy details', () => {
        const wrapper = shallow(<PoliciesItem {...sampleProps} />);
        expect(wrapper.find('.name').text()).toEqual('Travel');
        expect(wrapper.find('.description').text()).toEqual('Turkey, 1 person ');
    });

    it('calls editDescription prop on description edit click', () => {
        const wrapper = shallow(<PoliciesItem {...sampleProps} />);
        wrapper.find('.policies .edit-description').first().simulate('click');
        expect(sampleProps.editDescription).toHaveBeenCalled();
    });
});
