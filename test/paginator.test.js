/* global expect */
/* eslint-env browser, mocha */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true  }] */
import { mount } from 'enzyme';
import React from 'react';
import Paginator from '../src/components/paginator';

describe('Paginator', function() {
  it('mounts Paginator', function() {
    const wrapper = mount(<Paginator />);
    expect(wrapper.find(Paginator)).to.have.length(1);
  });

  describe('with default props', function() {
    let wrapper;

    beforeEach(function() {
      wrapper = mount(<Paginator />);
    });

    it('should have first and last buttons', function() {
      expect(wrapper.find('#first')).to.have.length(1);
      expect(wrapper.find('#last')).to.have.length(1);
    });
    // it('should not show itemCount or totalItems', function() {});
    // it('should start on page 1', function() {});
    // it('should have pageKey of "page"', function() {});
    // it('should include a page select input', function() {});
  });

  describe('with boolean props contrary to default and totalItems provided', function() {
    // it('should...', function() {});
  });

  // BASIC FUNCTIONALITY...
  describe('with onClickPrev and onClickNext not provided as props', function() {
    // it('should...', function() {});
  });

  describe('with onClickPrev and onClickNext provided as props', function() {
    // it('should...', function() {});
  });

  describe('with router provided and onPageChange not provided as props', function() {});
});

// it('should...', function() {});
