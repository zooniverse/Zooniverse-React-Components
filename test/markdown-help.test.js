/* global expect */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true  }] */
import { mount } from 'enzyme';
import React from 'react';
import MarkdownHelp from '../src/components/zooniverse-logo';

describe('MarkdownHelp', function() {
  it('mounts MarkdownHelp', function() {
    const wrapper = mount(<MarkdownHelp />);
    expect(wrapper.find(MarkdownHelp)).to.have.length(1);
  });
});
