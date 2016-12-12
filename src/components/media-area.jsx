// module.exports = React.createClass
//   displayName: 'MediaArea'

//   getDefaultProps: ->
//     resource: null
//     link: 'attached_images'
//     pageSize: 200
//     metadata: {}
//     onAdd: Function.prototype
//     onDelete: Function.prototype

//   getInitialState: ->
//     pendingFiles: []
//     pendingMedia: []
//     errors: []

//   addButtonStyle:
//     height: '80px'
//     lineHeight: '100px'
//     width: '100px'

//   filterOnMetadata: (resource) ->
//     passes = true
//     for key, value of @props.metadata
//       unless resource.metadata[key] is value
//         passes = false
//         break
//     passes

//   render: ->
//     window.lastRenderedMediaArea = this

//     @cachedMediaRequest = @props.resource.get @props.link, page_size: @props.pageSize
//       .catch ->
//         []

//     <PromiseRenderer promise={@cachedMediaRequest}>{(media) =>
//       media = [].concat(media).filter @filterOnMetadata

//       <div className={"media-area #{@props.className}".trim()} style={Object.assign position: 'relative', @props.style}>
//         <FileDropTarget style={
//           bottom: '3px'
//           left: '3px'
//           position: 'absolute'
//           right: '3px'
//           top: '3px'
//         } onDrop={@handleDrop} />

//         {if media.length is 0
//           <small>
//             <em>No media</em>
//           </small>}

//         <ul className="media-area-list">
//           {media.map (resource) =>
//             if resource in @state.pendingMedia
//               null
//             else
//               <li key={resource.id} className="media-area-item">
//                 <MediaIcon resource={resource} onDelete={@handleDelete} />
//               </li>}

//           <li className="media-area-item" style={alignSelf: 'stretch'}>
//             <div className="media-icon">
//               <FileButton className="media-area-add-button" accept="image/*" multiple style={@addButtonStyle} onSelect={@handleFileSelection}>
//                 <i className="fa fa-plus fa-3x"></i>
//               </FileButton>
//               <div className="media-icon-label">Select files</div>
//             </div>
//           </li>
//         </ul>

//         {if @props.children?
//           <hr />}
//         {@props.children}

//         {unless @state.pendingFiles.length is 0
//           <hr />}
//         {@state.pendingFiles.map (file) =>
//           <div key={file.name}>
//             <small>
//               <i className="fa fa-spinner fa-spin"></i>{' '}
//               <strong>{file.name}</strong>
//             </small>
//           </div>}

//         {unless @state.errors.length is 0
//           <hr />}
//         {@state.errors.map ({file, error}) =>
//           <div key={file.name}>{error.toString()} ({file.name})</div>}
//       </div>
//     }</PromiseRenderer>

//   handleDrop: (e) ->
//     @addFiles Array::slice.call e.dataTransfer.files

//   handleDelete: ->
//     @refresh()
//     @props.onDelete arguments...

//   refresh: ->
//     console.log 'Refreshing media area'
//     @cachedMediaRequest = null
//     @forceUpdate()

//   handleFileSelection: (e) ->
//     console.log "Handling #{e.target.files.length} selected files"
//     @addFiles Array::slice.call e.target.files

//   addFiles: (files) ->
//     console.log "Adding #{files.length} files"
//     files.forEach @addFile

//   addFile: (file) ->
//     console.log "Adding media #{file.name}"
//     @state.pendingFiles.push file
//     @setState pendingFiles: @state.pendingFiles

//     @createLinkedResource file
//       .then @uploadMedia.bind this, file
//       .then @handleSuccess
//       .catch @handleError.bind this, file
//       .then @removeFromPending.bind this, file

//   createLinkedResource: (file) ->
//     console.log "Creating resource for #{file.name}, #{(file.type)}"
//     payload =
//       media:
//         content_type: file.type
//         metadata:
//           filename: file.name

//     Object.assign payload.media.metadata, @props.metadata

//     apiClient.post @props.resource._getURL(@props.link), payload
//       .then (media) =>
//         # We get an array here for some reason. Pull the resource out.
//         # TODO: Look into this.
//         media = [].concat(media)[0]
//         @state.pendingMedia.push media
//         media

//   uploadMedia: (file, media) ->
//     console.log "Uploading #{file.name} => #{media.src}"
//     putFile media.src, file, {'Content-Type': file.type}
//       .then =>
//         media.refresh().then (media) =>
//           # Another weird array.
//           [].concat(media)[0]
//       .catch (error) =>
//         media.delete()
//           .then =>
//             throw error

//   handleSuccess: (media) ->
//     console.log "Success! #{media.metadata.filename}"
//     pendingMediaIndex = @state.pendingMedia.indexOf media
//     @state.pendingMedia.splice pendingMediaIndex, 1
//     @setState pendingMedia: @state.pendingMedia
//     @props.onAdd media
//     media

//   handleError: (file, error) ->
//     console.log "Got error #{error.message} for #{file.name}"
//     @state.errors.push {file, error}
//     @setState errors: @state.errors

//   removeFromPending: (file) ->
//     console.log "No longer pendingFiles: #{file.name}"
//     pendingFileIndex = @state.pendingFiles.indexOf file
//     @state.pendingFiles.splice pendingFileIndex, 1
//     @setState pendingFiles: @state.pendingFiles
