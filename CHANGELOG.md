# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

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
