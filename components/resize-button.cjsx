# @cjsx React.DOM

React = require 'react'

module.exports = React.createClass
  displayName: 'ResizeButton'

  render: ->
    fillColor = '#26baff'
    strokeColor = '#000'
    strokeWidth = 2
    radius = 10

    cross = "
      M #{-radius * 0.6} 0
      L 0 #{radius * 0.6 }

      M 0 #{-radius * 0.6 }
      L #{ -radius * 0.6 } 0

      M #{radius * 0.6 } 0
      L 0 #{-radius * 0.6 }

      M 0 #{radius * 0.6 }
      L #{ radius * 0.6 } 0


    "

    @transferPropsTo <g className="clickable drawing-tool-delete-button" stroke={strokeColor} strokeWidth={strokeWidth} onClick={@props.onClick}>
      <circle r={radius} fill={fillColor} />
      <path d={cross} transform="rotate(90)" />
    </g>
