# @cjsx React.DOM

React = require 'react'

MiniTutorialCompoment = React.createClass
  displayName: 'MiniTutorialCompoment'

  render: ->
    <div className="miniTutorial">HELLO WORLD</div>

module.exports = MiniTutorialCompoment
