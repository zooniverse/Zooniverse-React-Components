React = require 'react'

TalkComment = require './comment'

TalkCommentList = React.createClass
  getInitialState: ->
    { discussion: null }
  
  loadComments: ->
    $.get("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focus.zooniverse_id }").then (subject) =>
      @setState discussion: subject.discussion
  
  componentDidMount: ->
    @loadComments()
  
  comments: ->
    # list = @state.discussion?.comments or []
    
    # Fake comments
    list = if @state.discussion then require('./fake_comments') else []
    
    list.map (comment) =>
      <TalkComment key={comment._id} comment={comment} />
  
  render: ->
    <ul className="talk-comment-list">
      {@comments()}
    </ul>

module.exports = TalkCommentList
