React = require 'react'

TalkComment = require './comment'

TalkCommentList = React.createClass
  getInitialState: ->
    { discussion: null }
  
  loadComments: ->
    $.get("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focus.zooniverse_id }").then (subject) =>
      @setState discussion: subject.discussion
  
  componentDidMount: ->
    # Loading the discussion from here doesn't work?
    # Apparently the component is only mounted before the subject is loaded
  
  comments: ->
    # list = @state.discussion?.comments or []
    list = require './fake_comments'
    
    list.map (comment) =>
      <TalkComment key={comment._id} comment={comment} />
  
  render: ->
    # This seems really kludgey
    @loadComments() if @props.focus and not @state.discussion
    <ul className="talk-comment-list">
      {@comments()}
    </ul>

module.exports = TalkCommentList
