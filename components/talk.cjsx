React = require 'react'
TalkSubject = require './talk/subject'

auth = null
throw new Error('No authorization defined') unless auth

# TO-DO: replace with current user from top bar
$.ajaxSetup
  headers:
      'Authorization': "Basic #{ auth }"

Talk = React.createClass
  render: ->
    <div className="talk">
      <TalkSubject />
    </div>

module.exports = Talk
