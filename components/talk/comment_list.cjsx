React = require 'react'

TalkCommentList = React.createClass
  getInitialState: ->
    { discussion: null }
  
  loadComments: ->
    $.get("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focus.zooniverse_id }").then (subject) =>
      @setState discussion: subject.discussion
  
  componentDidMount: ->
    # Loading the discussion from here doesn't work?
    # Apparently the component is only mounted before the subject is loaded
  
  render: ->
    # This seems really kludgey
    @loadComments() if @props.focus and not @state.discussion
    <div className="talk-comment-list">
      Comment list
    </div>

module.exports = TalkCommentList
