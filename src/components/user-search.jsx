import React from 'react';
import Select from 'react-select';
import apiClient from 'panoptes-client/lib/api-client';


export default class UserSearch extends React.Component {
  constructor(props) {
    super(props)

    this.queryTimeout = NaN;

    this.state = {
      users: []
    }

    this.searchUsers = this.searchUsers.bind(this);
  }

  delayBy(timeout, fn) {
    return setTimeout(fn, timeout);
  }

  onChange(users) {
    this.setState({ users });
  }

  searchUsers(value) {
    clearTimeout(this.queryTimeout)
    const onSearch = this.props.onSearch;

    if (value === '') {
      return Promise.resolve({ options: [] });
    }

    return new Promise((resolve) => {
      this.queryTimeout = delayBy(this.props.debounce, () => {
        if (onSearch) {
          onSearch();
        }

        return apiClient.type('users').get({ search: value, page_size: 10 })
          .then((users) => {
            for (const user in users) {
              return { 
                value: user.id,
                label: `@${user.login}: ${user.display_name}`
              };
            }
          }).then((options) => {
            return resolve({ options });
          }).catch((err) => { console.error(err) });
      });
    });
  }

  render() {
    return (
      <Select.Async
        multi={this.props.multi}
        name="userids"
        value={this.state.users}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        searchPromptText={this.props.searchPromptText}
        className={this.props.className}
        closeAfterClick={true}
        matchProp={'label'}
        loadOptions={this.searchUsers} 
      />
    );
  }
}

UserSearch.propTypes = {
  className: React.PropTypes.string
  debounce: React.PropTypes.number,
  multi: React.PropTypes.bool,
  onSearch: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  searchPromptText: React.PropTypes.string,
}

UserSearch.defaultProps = {
  className: 'search'
  debounce: 200,
  multi: true,
  onSearch: null,
  placeholder: 'Username:'
  searchPromptText: 'Type to search Users'
}

// React = require 'react'
// Select = require 'react-select'
// apiClient = require 'panoptes-client/lib/api-client'

// delayBy = (timeout, fn) ->
//   setTimeout fn, timeout

// module.exports = React.createClass
//   displayName: 'UserSearch'

//   queryTimeout: NaN

//   propTypes:
//     multi: React.PropTypes.bool
//     debounce: React.PropTypes.number

//   getDefaultProps: ->
//     multi: true
//     debounce: 200

//   getInitialState: ->
//     users: []

//   onChange: (users) ->
//     @setState {users}

  // searchUsers: (value) ->
  //   clearTimeout @queryTimeout
  //   onSearch = @props.onSearch

  //   if value is ''
  //     Promise.resolve options: []
  //   else
  //     new Promise (resolve) =>
  //       @queryTimeout = delayBy @props.debounce, =>
  //         onSearch() if onSearch
  //         apiClient.type('users').get search: value, page_size: 10
  //           .then (users) =>
  //             for user in users
  //               value: user.id
  //               label: "@#{user.login}: #{user.display_name}"
  //           .then (options) =>
  //             resolve {options}

  // render: ->
  //   <Select.Async
  //     multi={@props.multi}
  //     name="userids"
  //     value={@state.users}
  //     onChange={@onChange}
  //     placeholder="Username:"
  //     searchPromptText="Type to search Users"
  //     className="search standard-input"
  //     closeAfterClick={true}
  //     matchProp={'label'}
  //     loadOptions={@searchUsers} />
