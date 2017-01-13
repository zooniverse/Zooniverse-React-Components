/* global expect */
/* eslint-env browser, mocha */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true  }] */
import { mount, render, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import ImageSelector from '../src/components/image-selector';
import MediaIcon from '../src/components/media-icon';

const RESOURCE = {
  src: 'http://placekitten.com/200/300',
};

describe('ImageSelector', function() {
  it('mounts ImageSelector', function() {
    const wrapper = mount(<ImageSelector />);
    expect(wrapper.instance()).to.be.an.instanceof(ImageSelector);
  });

  describe('ImageSelector render', function() {
    it('renders <MediaIcon /> if resource is loaded', function() {
      const wrapper = shallow(<ImageSelector resource={RESOURCE} />);
      expect(wrapper.find(MediaIcon)).to.have.length(1);
    });

    it('renders a placeholder prop if resource is not loaded', function() {
      const placeholder = <p id="placeholder">Drop an image here (or click to select).</p>;
      const wrapper = render(<ImageSelector placeholder={placeholder} />);
      expect(wrapper.find('#placeholder')).to.have.length(1);
    });
  });

  describe('handleChange method', function() {
    it('returns null if there are no files', function() {
      const spy = sinon.spy(ImageSelector.prototype, 'handleChange');
      const wrapper = mount(<ImageSelector />);
      wrapper.find('input').simulate('change');
      expect(spy.returnValues[0]).to.be.null;
    });
  });
});
