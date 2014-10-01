# @cjsx React.DOM

React = require 'react'

MiniTutorialCompoment = React.createClass
  displayName: 'MiniTutorialCompoment'

  getInitialState: ->
    {
      activeSlide: 0
    }

  render: ->
    slideNodes = @props.slides.map (slide) ->
      <div key={slide.id} className="slide">
        <div className="top-half">
          <img src={slide.image} />
        </div>
        <div className="bottom-half">
          <h1>{slide.title}</h1>
          <p>{slide.content}</p>
        </div>
      </div>

    <div className="mini-tutorial">
      <div className="tutorial-slide">
        <button className="close" onClick={@props.closeHandler}>Close</button>
        <div className="slides-container">
          {slideNodes}
        </div>
      </div>
    </div>

module.exports = MiniTutorialCompoment
