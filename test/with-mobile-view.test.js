// "Passing arrow functions (“lambdas”) to Mocha is discouraged" - https://mochajs.org/#arrow-functions
/* eslint prefer-arrow-callback: 0, func-names: 0, 'react/jsx-boolean-value': ['error', 'always'] */
/* global describe, it, before, expect */

import React from 'react';
import { mount } from 'enzyme';
import withMobileView from '../src/components/layout/with-mobile-view';

// describe.('withMobileView', function() {
//   let wrapper;
//   before(function() {
//     function MockComponent() {
//       return (<div></div>);
//     }

//     const component = withMobileView(MockComponent);
//     wrapper = mount(component);
//   });

//   it('renders without crashing', function() {});

//   it('renders the MockComponent', function() {
//     expect(wrapper.find('div')).to.have.lengthOf(1);
//   });
// });
