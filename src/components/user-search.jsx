import React from 'react';
import Select from 'react-select';
import apiClient from 'panoptes-client/lib/api-client';

export default class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.queryTimeout = NaN;

    this.state = {
      users: [],
    };

    this.searchUsers = this.searchUsers.bind(this);
  }

  onChange(users) {
    this.setState({ users });
  }

  delayBy(timeout, fn) { // eslint-disable-line class-methods-use-this
    return setTimeout(fn, timeout);
  }

  searchUsers(value) {
    clearTimeout(this.queryTimeout);
    const onSearch = this.props.onSearch;

    if (value === '') {
      return Promise.resolve({ options: [] });
    }

    return new Promise((resolve) => {
      this.queryTimeout = this.delayBy(this.props.debounce, () => {
        if (onSearch) {
          onSearch();
        }

        return apiClient.type('users').get({ search: value, page_size: 10 })
          .then((users) => {
            // TODO: looks like this will only match the first result in the page
            // shouldn't we use map or something like that instead?
            for (const user in users) {
              return {
                value: user.id,
                label: `@${user.login}: ${user.display_name}`,
              };
            }
          })
          .then(options => resolve({ options }))
          .catch((err) => { console.error(err); });
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
  className: React.PropTypes.string,
  debounce: React.PropTypes.number,
  multi: React.PropTypes.bool,
  onSearch: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  searchPromptText: React.PropTypes.string,
};

UserSearch.defaultProps = {
  className: 'search',
  debounce: 200,
  multi: true,
  onSearch: null,
  placeholder: 'Username:',
  searchPromptText: 'Type to search Users',
};
