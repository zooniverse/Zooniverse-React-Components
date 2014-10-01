# @cjsx React.DOM

React = require 'react'
{Router, Routes, Route, Link} = require 'react-router'
MiniTutorialCompoment = require 'mini-tutorial'
# require components here:

SampleComponent = React.createClass
  displayName: 'SampleComponent'

  render: ->
    <div className="sample-component">
      <h1>Zooniverse React Components</h1>
      <p>Add components to the /components directory</p>
      <p>Give them a route with name & path props and link to that path here:</p>
      <ul>
        <li><Link to="root">This will go nowhere....</Link></li>
        <li><Link to="mini-tutorial">Open Mini-Tutorial</link></li>
      </ul>
    </div>

Main = React.createClass
  render: ->
    <Routes>
      <Route path="/" name="root" handler={SampleComponent} />
      <Route path="/mini-tutorial" name="miniTutorial" handler={MiniTutorialCompoment} />
    </Routes>

React.renderComponent Main(null), document.body
window.React = React
