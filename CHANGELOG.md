# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.12.0]

Panoptes JS Client 5, including a rebuilt JSON-API client and new Sugar client.
Fixes for broken Twitter emoji in Markdownz.

* Bump jsdom from 21.0.0 to 21.1.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/164
* Bump panoptes-client from 4.2.8 to 5.0.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/163
* Update README.md by @mcbouslog in https://github.com/zooniverse/Zooniverse-React-Components/pull/165
* Bump panoptes-client from 5.0.0 to 5.1.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/167
* Bump markdownz from 8.0.1 to 8.0.2 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/166
* Bump panoptes-client from 5.1.0 to 5.2.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/168

## [0.11.3]
- Panoptes JavaScript Client 4.2.8, with superagent 8.0.8
- ESLint updates.

## [0.11.2]
- Markdownz 8.0.1, to fix broken Twitter emoji URLs.

## [0.11.1]
- Explicitly require React 16.14.

## What's Changed
* Bump jsdom from 20.0.3 to 21.0.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/152
* Bump react-test-renderer from 16.13.1 to 16.14.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/153

## [0.11.0]
## What's Changed
- requires React 16.14 and the automatic runtime.
- adds an ESM build for browsers that support ES modules.

* Bump @babel/core from 7.20.7 to 7.20.12 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/149
* Bump markdownz from 7.10.1 to 8.0.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/150
* Add an ESM build by @eatyourgreens in https://github.com/zooniverse/Zooniverse-React-Components/pull/151


## [0.10.6]
### Updated
* Bump eslint from 8.29.0 to 8.30.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/143
* Bump markdownz from 7.10.0 to 7.10.1 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/144
* Bump @babel/core from 7.20.5 to 7.20.7 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/146
* Bump @babel/cli from 7.19.3 to 7.20.7 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/147
* Bump eslint from 8.30.0 to 8.31.0 by @dependabot in https://github.com/zooniverse/Zooniverse-React-Components/pull/148

## [0.10.5]
### Updated
- bump `markdownz` to 7.10.0.
- bump `mocha` to 10.2.0.

## [0.10.4]
### Updated
- bump `panoptes-client` to 4.2.7.

## [0.10.3]
### Updated
- removed source code and tests from the published package.

## [0.10.2]
### Updated
- Bump `panoptes-client` to 4.2.6.
- Updated build dependencies.
- Updated CI.

## [0.10.1]
### Updated
- Run `npm audit fix` to bump minimatch.

## [0.10.0]
### Updated
- outdated build dependencies updated to latest versions.
- panoptes-client 4.2.5.
- markdownz 7.9.0

## [0.9.7]
### Updated
- panoptes-client for security and dependency updates

## [0.9.6] 2022-08-30
### Updated
- README with dependents
### Fixed
- Version issue

## [0.9.5] 2022-08-19
### Security
- Dependency security patches

## [0.9.4] 2022-01-25
### Security
- Dependency security patches

## [0.9.3] 2021-10-21
### Security
- Dependency security patches

## [0.9.2] 2021-06-08
### Security
- Dependency security patches
- Upgraded panotpes-client

## [0.9.1] 2020-06-29
### Security
- Dependency security patches
- Upgrade to Babel 7

## [0.9.0] 2019-11-22
### Updated
- panoptes-javascript-client dependency updated to release candidate

## [0.8.1] 2019-07-15
### Fixed
- Dependency security patches

## [0.8.0] 2019-06-28
### Changed
- Upgraded to React 16

## [0.7.3] 2019-06-11
### Fixed
- Dependency security patches

## [0.7.2] 2019-06-07
### Fixed
- Dependency security patches

## [0.7.1] 2018-01-02
### Fixed
- Only show the Google sign in button if props.loginWithGoogle function is defined

## [0.7.0] 2017-11-10
### Added
- SignedInUserNavigation component and tests
- SignedOutUserNavigation component and tests
- MobileNavigationMenu component, default styles, and tests
- Higher order component function withMobileView and tests

### Changed
- ZooHeader is now wrapped by withMobileView which toggles hiding the desktop navigation menu
- ZooHeader now supports prop.isAdmin which determines whether or not to show the Anchor component that links to the admin page
- UserNavigation is now wrapped by withMobileView which determines what kind of label to use for the Anchor components.
- UserNavigation navigation props changed to separate props for the notifications and messages links so that they could be targeted by the mobile view state for the label change.
- Updated shared default styles between UserMenu and MobileNavigationMenu

## [0.6.3] 2017-10-26
### Fixed
- Fixed Tutorial function binding and missing period in preferences query

## [0.6.2] 2017-10-24
### Fixed
- Fixed Tutorial static methods to open component if tutorial isn't finished

## [0.6.1] 2017-10-18
### Fixed
- Added exports for MediaCard and StepThrough components

## [0.6.0] 2017-10-16
### Added
- MediaCard component and tests
- StepThrough component and tests
- Tutorial component and tests
- Default CSS for Tutorial and child components
- Added `animated-scrollto` dependency for StepThrough component
- Added `markdownz` dependency for Tutorial component
- Added `react-swipe` dependency for StepThrough component

## [0.5.0] 2017-10-10
### Added
- ZooHeader component and tests
- OauthModal component and tests
- OauthGoogleIcon component and tests
- LoginButton component and tests
- LogoutButton component and tests
- UserMenu component and tests
- UserNavigation component and tests
- Default CSS for ZooHeader and child components

### Changed
- Reorganized css folder and imports

## [0.4.4] 2017-08-16
### Fixed
- Add missing default styles for AdminLayoutIndicator

## [0.4.3] 2017-08-11
### Fixed
- Fixed border color and base font size for the default styles for ZooFooter

## [0.4.2] 2017-08-10
### Fixed
- Fixed AdminLayoutIndicator export
- Fixed eslint configs and bumped dependency versions
- Use hosted image for footer

## [0.4.1] 2017-08-10
### Fixed
- Fixed AdminCheckbox export
- Fixed ZooFooter export

## [0.4.0] 2017-08-10
### Added
- ZooFooter component, default CSS, and tests
- AdminCheckbox component and tests
- AdminLayoutIndicator component and tests
- Added `dirty-chai` for tests
- Added `grommet` dependency for ZooFooter and AdminCheckbox components
- Specified node 8 and npm 5 in package.json and added package-lock.json file
- Added travis configuration file, so tests will run when a PR is submitted

### Fixed
- Added className props to ZooniverseLogo and ZooniverseLogotype to better support modifying the SVG styles
- Updated `jsdom` dependency and setup configuration for testing so it works with later versions of enzyme
- Fixed how the URL is formed to make sure it uses the origin prop in DisplayNameSlugEditor

### Changed
- Updated `react` and `react-dom` dependencies
- Updated to use the `prop-types` dependency for React PropTypes
- Updated `react-select` dependency
- Changed Paginator selection text to use a prop and minor default CSS margin change

## [0.3.0] 2017-07-17
### Added
- Paginator component and tests

### Fixed
- Removed default syling from ZooniverseLogo
- Added class method to DisplayNameSlugEditor to access state values

## [0.2.0] 2017-05-25
### Added
- DisplayNameSlugEditor component and tests
- ImageSelector component and tests

### Fixed
- Removed capitalization from package name to conform with NPM requirements

## [0.1.2] 2017-02-20
### Fixed
- Fixed build

## [0.1.1] 2017-02-17
### Fixed
- Fixed broken onChange handler and returned values in `UserSearch` component

## [0.1.0] 2017-02-02
### Added

- DragAndDrop component
- FileButton component
- MediaIcon component
- Thumbnail component
- UserSearch component
- Default styles for DragAndDrop and MediaIcon
- Build scripts to transpile stylus and jsx into css and js in lib folder
- Mocha tests for DragAndDrop and MediaIcon
- Added Babel, Yarn, and ESLint

### Changed
- Switched from gulp to webpack
- Updated dependency for React

### Removed
- Removed old experimental components
