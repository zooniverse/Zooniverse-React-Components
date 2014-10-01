React = require 'react'
TalkCommentList = require './comment_list'

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
  
  commentList: ->
    if @state.subject
      <TalkCommentList focus={@state.subject} />
    else
      ''
  
  render: ->
    <div className="talk-subject">
      <img src={@image()} />
      {@commentList()}
    </div>

module.exports = TalkSubject
