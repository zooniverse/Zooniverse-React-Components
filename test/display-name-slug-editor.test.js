/* global expect */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true  }] */
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import DisplayNameSlugEditor from '../src/components/display-name-slug-editor';

const resource = {
  id: '3',
  display_name: 'resource-name',
  slug: 'owner/resource-name'
};

describe('DisplayNameSlugEditor', function() {
  it('mounts', function() {
    const wrapper = mount(<DisplayNameSlugEditor />);
    expect(wrapper.instance()).to.be.an.instanceof(DisplayNameSlugEditor);
  });

  describe('rendered component', function() {
    let wrapper;
    before(function() {
      wrapper = shallow(<DisplayNameSlugEditor resource={resource} resourceType="project" />);
    });

    it('should render a text input', function() {
      expect(wrapper.find('input[type="text"]')).to.have.length(1);
    });

    it('should use the resource display_name as a default value', function() {
      expect(wrapper.find('input[type="text"]').props().defaultValue).to.equal(resource.display_name);
    });
  });
});