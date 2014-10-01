# @cjsx React.DOM

React = require 'react'

MiniTutorialCompoment = React.createClass
  displayName: 'MiniTutorialCompoment'

  getInitialState: ->
    {
      activeSlide: 1 # shows id key of slide
    }

  slideIsActive: (slide) ->
    if slide.id is @state.activeSlide then true else false

  showSlide: (id) ->
    if id > @props.slides.length
      @props.closeHandler()
    else
      @setState activeSlide: id

  render: ->
    slideNodes = @props.slides.map (slide) =>
      classes = "slide"
      classes += " active" if @slideIsActive slide

      <div key={slide.id} className={classes}>
        <div className="top-half">
          <img src={slide.image} />
        </div>
        <div className="bottom-half">
          <h1>{slide.title}</h1>
          <p>{slide.content}</p>
        </div>
      </div>

    dotNodes = @props.slides.map (slide) =>
      classes = "dot"
      classes += " active" if @slideIsActive slide
      <div key={slide.id} className={classes} onClick={@showSlide.bind(@, slide.id)}></div>

    <div className="mini-tutorial">
      <div className="tutorial-slide">
        <button className="close" onClick={@props.closeHandler}>Close</button>
        <div className="slides-container">
          {slideNodes}
        </div>
        <button className="next" onClick={@showSlide.bind(@, @state.activeSlide + 1)}>Next</button>
        <div className="dots">
          {dotNodes}
        </div>
      </div>
    </div>

module.exports = MiniTutorialCompoment
