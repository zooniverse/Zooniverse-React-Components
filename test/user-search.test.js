/* global expect */
/* eslint-env browser, mocha */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true  }] */
import { mount, render, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import UserSearch from '../src/components/user-search';

describe('UserSearch', function() {
  it('mounts UserSearch', function() {
    const wrapper = mount(<UserSearch />);
    expect(wrapper.instance()).to.be.an.instanceof(UserSearch);
  });

  describe('render', function() {
    it('renders a text input', function() {
      const wrapper = shallow(<UserSearch />);
      expect(wrapper.find('input')).to.have.length(1);
    });
  });
});
