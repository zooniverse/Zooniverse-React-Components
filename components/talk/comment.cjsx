React = require 'react'

TalkComment = React.createClass
  render: ->
    <li className="talk-comment">
      {@props.comment.body}
    </li>

module.exports = TalkComment
