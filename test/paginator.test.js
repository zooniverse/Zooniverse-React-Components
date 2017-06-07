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
      wrapper = mount(<Paginator totalItems={<span>Should not show</span>} />);
    });

    it('should have first and last buttons', function() {
      expect(wrapper.find('#first')).to.have.length(1);
      expect(wrapper.find('#last')).to.have.length(1);
    });
    it('should not show totalItems', function() {
      expect(wrapper.contains(<span>Should not show</span>)).to.equal(false);
    });
    it('should start on page 1', function() {
      expect(wrapper.prop('page')).to.equal(1);
    });
    it('should have pageKey of "page"', function() {
      expect(wrapper.prop('pageKey')).to.equal('page');
    });
    it('should include a page select input', function() {
      expect(wrapper.find('select')).to.have.length(1);
    });
    it('should disable first and previous if on first page', function() {
      const firstButton = wrapper.find('#first');
      const prevButton = wrapper.find('#previous');
      expect(firstButton.prop('disabled')).to.equal(true);
      expect(prevButton.prop('disabled')).to.equal(true);
    });
  });

  describe('on last page', function() {
    // it('should disable last and next buttons', {});
  });

  describe('with className prop provided', function() {
    // it('should reflect className's styling', function() {});
  });

  describe('with props firstAndLast and pageSelector false', function() {
    // it('should not show a first button, last button or page select', function() {});
  });

  describe('with props for first, previous, next and last labels', function() {
    // it('should show the labels provided', function() {});
  });

  describe('with props itemCount true and totalItems defined', function() {
    // it('should show totalItems' content ', function() {});
  });

  describe('with props page, pageKey and router provided', function() {
    // it('should start on page and add pakeKey to param', function() {});
    // it('should go to the next page', function() {});
    // it('should go to the last page', function() {});
    // it('should go to the previous page', function() {});
    // it('should go to the first page', function() {});
    // it('should go to a page selected', function() {});
  });

  describe('with onChange prop provided', function() {
    // it('should go to the next page', function() {});
    // it('should go to the last page', function() {});
    // it('should go to the previous page', function() {});
    // it('should go to the first page', function() {});
    // it('should go to a page selected', function() {});
  });

  describe('with props onClickNext and onClickPrev provided', function() {
    // it('should appropriately call onClickNext', function() {});
    // it('should appropriately call onClickPrev', function() {});
  });
});
