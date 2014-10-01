# @cjsx React.DOM

React = require 'react'
{Router, Routes, Route, Link} = require 'react-router'
CardModalCompoment = require './card-modal'
# require components here:

SampleComponent = React.createClass
  displayName: 'SampleComponent'

  getInitialState: ->
    {
      slidesData: require '../lib/slides-data'
      miniTutorialActive: false
    }

  handleOpenMiniTutorial: ->
    @setState miniTutorialActive: true

  handleCloseMiniTutorial: ->
    @setState miniTutorialActive: false

  render: ->
    <div className="sample-component">
      <h1>Zooniverse React Components</h1>
      <p>Add components to the components directory</p>
      <p>Give them a route with name & path props and link to that path here:</p>
      <ul>
        <li><Link to="root">This will go nowhere....</Link></li>
        <li onClick={@handleOpenMiniTutorial}>Click this text to open Mini-tutorial</li>
      </ul>
      {if @state.miniTutorialActive then <CardModalCompoment slides={@state.slidesData} closeHandler={@handleCloseMiniTutorial} /> else null }
    </div>

Main = React.createClass
  render: ->
    <Routes>
      <Route path="/" name="root" handler={SampleComponent} />
    </Routes>

React.renderComponent Main(null), document.body
window.React = React
