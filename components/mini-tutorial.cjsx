# @cjsx React.DOM

React = require 'react'

MiniTutorialCompoment = React.createClass
  displayName: 'MiniTutorialCompoment'

  getInitialState: ->
    {
      active: false
      activeSlide: 0
    }

  render: ->
    slides = {}

    classes = "mini-tutorial"
    classes += " active" if @props.active

    @props.slides.forEach (slide, i) ->
      slides["slide#{ i }"] = 
        <div className="slide">
          <div className="top-half">
            <img src={slide.image} />
          </div>
          <div className="bottom-half">
            <h1>{slide.title}</h1>
            <p>{slide.content}</p>
          </div>
        </div>

    <div className={classes}>
      <div className="tutorial-slide">
        <button className="close">Close</button>
        <div className="slides-container">
          { slides }
        </div>
      </div>
    </div>

module.exports = MiniTutorialCompoment
