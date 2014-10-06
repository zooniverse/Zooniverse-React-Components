React                         = require 'react'
{Router, Routes, Route, Link} = require 'react-router'
example_subjects              = require '../lib/example_subject.json'
$                             = require '../lib/jquery-2.1.0.min.js'


marks = []

module.exports = 

######################################

ImageSubjectViewer = React.createClass
  displayName: 'ImageSubjectViewer'

  render: ->
    endpoint = "http://localhost:3000/workflows/533cd4dd4954738018030000/subjects.json?limit=5"
    <div className="image-subject-viewer">
      <SubjectContainer ref='subject_container' endpoint=endpoint />
    </div>

######################################

SubjectContainer = React.createClass
  displayName: 'SubjectContainer'

  getInitialState: ->
    subjects: example_subjects
    meta_data: "Blah"

  componentDidMount: ->
    @fetchSubjects()

  fetchSubjects: ->
    $.ajax
      url: @props.endpoint
      dataType: "json"
      success: ((data) ->
        @setState subjects        : data
        @setState curr_subject    : data[0]
        @setState subject_img_url : data[0].location
        @setState meta_data       : data[0].meta_data

        # pre-load images
        for subject, i in data
          tmp = new Image()
          tmp.src = subject.location 

        return
      ).bind(this)
      error: ((xhr, status, err) ->
        console.error "Error loading subjects: ", @props.endpoint, status, err.toString()
        return
      ).bind(this)
    return

  nextSubject: () ->
    if @state.subjects.shift() is undefined or @state.subjects.length <= 0
      @fetchSubjects()
      return
    else
      @setState curr_subject: @state.subjects[0]
      @setState subject_img_url: @state.subjects[0].location
      @setState meta_data: @state.subjects[0].meta_data
    
  render: ->
    <div className="subject-container">
      <MarkingSurface url={@state.subject_img_url} />
      <div className="subject-ui">
        <SubjectMetadata id={@state.subjects[0].zooniverse_id} meta_data={@state.meta_data} />
        <ActionButton onActionSubmit={@nextSubject} />
      </div>
    </div>


######################################

MarkingSurface = React.createClass
  displayName: "MarkingSurface"

  handleClick: (e) ->
    @addMark( e.nativeEvent.pageX, e.nativeEvent.pageY )
    # console.log "SCROLL TOP:", @getDOMNode().scrollTop
    
  addMark: (x,y) ->
    marks.push 
      x: x
      y: y
      wid: 100
      hei: 100
    @forceUpdate()

  render: ->
    <div className="marking-surface">
      <img className="subject-image" src={@props.url} onClick={@handleClick} />
      <MarksList mark_list={marks} />
    </div>

######################################

MarksList = React.createClass
  displayName: "MarksList"

  render: ->
    <div className="marks-list">
      {@props.mark_list.map((mark) ->
        <Mark xpos={mark.x} ypos={mark.y} wid={mark.wid} hei={mark.hei} />
      )}
    </div>

######################################

Mark = React.createClass
  displayName: "Mark"
  render: ->
    <div className="mark" style={{top: @props.ypos-@props.hei/2, left: @props.xpos-@props.wid/2, width: @props.wid, height: @props.hei }}>
    </div>

######################################

SubjectMetadata = React.createClass
  displayName: "Metadata"

  render: ->
    <div className="metadata">
      <h3>Metadata</h3>
    </div>

######################################

ActionButton = React.createClass
  displayName: "ActionButton"

  getInitialState: ->
    label: "NEXT SUBJECT"
    disable: true

  handleSubmit: (e) ->
    e.preventDefault() # prevent browser's default submit action
    @props.onActionSubmit()

  render: ->
    <form onSubmit={@handleSubmit}>
      <input type="submit" className="action-button button" value={@state.label} />
    </form>

window.React = React