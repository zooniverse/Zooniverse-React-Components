React = require 'react'

TalkSubject = React.createClass
  getInitialState: ->
    { subject: null }
  
  loadSubject: ->
    $.get('https://dev.zooniverse.org/projects/kelp/groups/subjects').then (subjects) =>
      @setState subject: subjects[0]
  
  componentDidMount: ->
    @loadSubject()
  
  image: ->
    @state.subject?.location?.standard
  
  render: ->
    <div className="talk-subject">
      <img src={@image()} />
    </div>

module.exports = TalkSubject
