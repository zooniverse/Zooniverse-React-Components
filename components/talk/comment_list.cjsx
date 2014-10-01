React = require 'react'

TalkComment = require './comment'
TalkCommentForm = require './comment_form'

TalkCommentList = React.createClass
  getInitialState: ->
    { discussion: null, sortOrder: -1 }
  
  loadComments: ->
    $.get("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focus.zooniverse_id }").then (subject) =>
      @setState discussion: subject.discussion
  
  componentDidMount: ->
    @loadComments()
  
  comments: ->
    list = @state.discussion?.comments or []
    
    direction = @state.sortOrder
    sortedList = list.sort (a, b) ->
      aDate = new Date(a.created_at)
      bDate = new Date(b.created_at)
      if direction is 1 then aDate > bDate else aDate < bDate
    
    sortedList.map (comment) =>
      <TalkComment key={comment._id} comment={comment} />
  
  newComment: (comment) ->
    @state.discussion.comments.unshift comment
    @setState discussion: @state.discussion
  
  reSort: (ev) ->
    direction = if @refs.sortOrderAscending.getDOMNode().checked then 1 else -1
    @setState sortOrder: direction
  
  render: ->
    <ul className="talk-comment-list">
      <form>
        <input type="radio" name="sortOrder" ref="sortOrderDescending" defaultChecked onChange={@reSort}>Newest Comments First</input>
        <input type="radio" name="sortOrder" ref="sortOrderAscending" onChange={@reSort}>Oldest Comments First</input>
      </form>
      {@comments()}
      <TalkCommentForm focusId={@props.focus.zooniverse_id} onCommentSubmit={@newComment} />
    </ul>

module.exports = TalkCommentList
