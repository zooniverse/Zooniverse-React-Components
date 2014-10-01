React = require 'react'

TalkComment = require './comment'
TalkCommentForm = require './comment_form'

TalkCommentList = React.createClass
  getInitialState: ->
    { discussion: null }
  
  loadComments: ->
    $.get("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focus.zooniverse_id }").then (subject) =>
      @setState discussion: subject.discussion
  
  componentDidMount: ->
    @loadComments()
  
  comments: ->
    list = @state.discussion?.comments or []
    
    list.map (comment) =>
      <TalkComment key={comment._id} comment={comment} />
  
  newComment: (comment) ->
    @state.discussion.comments.unshift comment
    @setState discussion: @state.discussion
  
  render: ->
    <ul className="talk-comment-list">
      {@comments()}
      <TalkCommentForm focusId={@props.focus.zooniverse_id} onCommentSubmit={@newComment} />
    </ul>

module.exports = TalkCommentList
