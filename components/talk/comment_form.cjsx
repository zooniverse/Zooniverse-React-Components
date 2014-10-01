React = require 'react'

TalkCommentForm = React.createClass
  handleSubmit: (ev) ->
    ev.preventDefault()
    body = @refs.body.getDOMNode().value.trim()
    return unless body.length > 0
    $.post("https://dev.zooniverse.org/projects/kelp/talk/subjects/#{ @props.focusId }/comments", comment: body).then (comment) =>
      @refs.body.getDOMNode().value = ''
      @props.onCommentSubmit comment
  
  render: ->
    <form className="talk-comment-form" onSubmit={@handleSubmit}>
      <input type="text" placeholder="What do you think?" ref="body" />
      <input type="submit" value="Comment" />
    </form>

module.exports = TalkCommentForm
