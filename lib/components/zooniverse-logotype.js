'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextID = 0;

var PATH = 'M 177.26 13.7C 177.67 13.7 178 14.03 178 14.43 178 14.43 178 16.08 178 16.08 178 16.48 177.67 16.81 177.26 16.81 177.26 16.81 166.47 16.81 166.47 16.81 166.07 16.81 165.74 16.48 165.74 16.08 165.74 16.08 165.74 1.66 165.74 1.66 165.74 1.26 166.07 0.93 166.47 0.93 166.47 0.93 177.15 0.93 177.15 0.93 177.56 0.93 177.89 1.26 177.89 1.66 177.89 1.66 177.89 3.31 177.89 3.31 177.89 3.71 177.56 4.04 177.15 4.04 177.15 4.04 169.26 4.04 169.26 4.04 169.26 4.04 169.26 7.26 169.26 7.26 169.26 7.26 176.11 7.26 176.11 7.26 176.52 7.26 176.85 7.58 176.85 7.99 176.85 7.99 176.85 9.64 176.85 9.64 176.85 10.04 176.52 10.37 176.11 10.37 176.11 10.37 169.26 10.37 169.26 10.37 169.26 10.37 169.26 13.7 169.26 13.7 169.26 13.7 177.26 13.7 177.26 13.7ZM 154.44 17.03C 152.24 17.03 150.02 16.35 148.19 14.97 147.86 14.72 147.81 14.25 148.08 13.93 148.08 13.93 149.24 12.56 149.24 12.56 149.49 12.26 149.93 12.22 150.25 12.45 151.54 13.38 152.9 13.95 154.51 13.95 155.96 13.95 156.83 13.38 156.83 12.45 156.83 12.45 156.83 12.41 156.83 12.41 156.83 11.52 156.28 11.07 153.59 10.39 150.34 9.57 148.25 8.69 148.25 5.54 148.25 5.54 148.25 5.49 148.25 5.49 148.25 2.61 150.6 0.71 153.89 0.71 155.96 0.71 157.76 1.27 159.28 2.3 159.62 2.52 159.69 2.97 159.46 3.3 159.46 3.3 158.44 4.77 158.44 4.77 158.21 5.09 157.77 5.18 157.44 4.97 156.21 4.23 155.01 3.79 153.84 3.79 152.48 3.79 151.77 4.4 151.77 5.17 151.77 5.17 151.77 5.22 151.77 5.22 151.77 6.26 152.46 6.6 155.24 7.3 158.51 8.14 160.35 9.3 160.35 12.07 160.35 12.07 160.35 12.11 160.35 12.11 160.35 15.26 157.91 17.03 154.44 17.03ZM 142.9 15.67C 143.24 16.15 142.89 16.81 142.3 16.81 142.3 16.81 139.95 16.81 139.95 16.81 139.7 16.81 139.47 16.69 139.33 16.48 139.33 16.48 136.1 11.73 136.1 11.73 136.1 11.73 133.32 11.73 133.32 11.73 133.32 11.73 133.32 16.08 133.32 16.08 133.32 16.48 132.99 16.81 132.58 16.81 132.58 16.81 130.51 16.81 130.51 16.81 130.1 16.81 129.77 16.48 129.77 16.08 129.77 16.08 129.77 1.66 129.77 1.66 129.77 1.26 130.1 0.93 130.51 0.93 130.51 0.93 137.14 0.93 137.14 0.93 139.18 0.93 140.77 1.5 141.83 2.54 142.73 3.43 143.21 4.67 143.21 6.17 143.21 6.17 143.21 6.22 143.21 6.22 143.21 8.78 141.81 10.39 139.76 11.14 139.76 11.14 142.9 15.67 142.9 15.67ZM 139.62 6.35C 139.62 4.86 138.56 4.08 136.84 4.08 136.84 4.08 133.32 4.08 133.32 4.08 133.32 4.08 133.32 8.64 133.32 8.64 133.32 8.64 136.91 8.64 136.91 8.64 138.63 8.64 139.62 7.74 139.62 6.4 139.62 6.4 139.62 6.35 139.62 6.35ZM 123.58 16.81C 123.58 16.81 112.79 16.81 112.79 16.81 112.39 16.81 112.05 16.48 112.05 16.08 112.05 16.08 112.05 1.66 112.05 1.66 112.05 1.26 112.39 0.93 112.79 0.93 112.79 0.93 123.47 0.93 123.47 0.93 123.87 0.93 124.2 1.26 124.2 1.66 124.2 1.66 124.2 3.31 124.2 3.31 124.2 3.71 123.87 4.04 123.47 4.04 123.47 4.04 115.58 4.04 115.58 4.04 115.58 4.04 115.58 7.26 115.58 7.26 115.58 7.26 122.43 7.26 122.43 7.26 122.84 7.26 123.17 7.58 123.17 7.99 123.17 7.99 123.17 9.64 123.17 9.64 123.17 10.04 122.84 10.37 122.43 10.37 122.43 10.37 115.58 10.37 115.58 10.37 115.58 10.37 115.58 13.7 115.58 13.7 115.58 13.7 123.58 13.7 123.58 13.7 123.99 13.7 124.32 14.03 124.32 14.43 124.32 14.43 124.32 16.08 124.32 16.08 124.32 16.48 123.99 16.81 123.58 16.81ZM 100.94 16.46C 100.83 16.74 100.56 16.92 100.26 16.92 100.26 16.92 98.13 16.92 98.13 16.92 97.83 16.92 97.55 16.74 97.44 16.46 97.44 16.46 91.52 1.93 91.52 1.93 91.33 1.45 91.68 0.93 92.21 0.93 92.21 0.93 94.28 0.93 94.28 0.93 94.73 0.93 95.13 1.21 95.29 1.63 95.29 1.63 99.24 12.11 99.24 12.11 99.24 12.11 103.19 1.63 103.19 1.63 103.35 1.21 103.75 0.93 104.2 0.93 104.2 0.93 106.18 0.93 106.18 0.93 106.7 0.93 107.06 1.45 106.86 1.93 106.86 1.93 100.94 16.46 100.94 16.46ZM 85.43 16.81C 85.43 16.81 83.36 16.81 83.36 16.81 82.96 16.81 82.63 16.48 82.63 16.08 82.63 16.08 82.63 1.66 82.63 1.66 82.63 1.26 82.96 0.93 83.36 0.93 83.36 0.93 85.43 0.93 85.43 0.93 85.84 0.93 86.17 1.26 86.17 1.66 86.17 1.66 86.17 16.08 86.17 16.08 86.17 16.48 85.84 16.81 85.43 16.81ZM 75.56 16.81C 75.56 16.81 73.82 16.81 73.82 16.81 73.48 16.81 73.16 16.65 72.96 16.39 72.96 16.39 65.48 6.72 65.48 6.72 65.48 6.72 65.48 16.08 65.48 16.08 65.48 16.48 65.15 16.81 64.75 16.81 64.75 16.81 62.72 16.81 62.72 16.81 62.32 16.81 61.99 16.48 61.99 16.08 61.99 16.08 61.99 1.66 61.99 1.66 61.99 1.26 62.32 0.93 62.72 0.93 62.72 0.93 64.72 0.93 64.72 0.93 65.06 0.93 65.37 1.09 65.58 1.35 65.58 1.35 72.8 10.71 72.8 10.71 72.8 10.71 72.8 1.66 72.8 1.66 72.8 1.26 73.13 0.93 73.54 0.93 73.54 0.93 75.56 0.93 75.56 0.93 75.97 0.93 76.3 1.26 76.3 1.66 76.3 1.66 76.3 16.08 76.3 16.08 76.3 16.48 75.97 16.81 75.56 16.81ZM 55.58 4.25C 56.46 5.63 56.96 7.25 56.96 9 56.96 13.97 52.87 18 47.83 18 45.13 18 42.7 16.84 41.03 15 39.79 15.77 38.67 16.44 37.75 16.97 37.31 17.23 36.86 16.65 37.24 16.3 38.02 15.57 38.98 14.71 40.08 13.75 39.2 12.37 38.7 10.75 38.7 9 38.7 4.03 42.79-0 47.83-0 50.53-0 52.96 1.16 54.63 3 55.87 2.23 56.99 1.56 57.91 1.03 58.35 0.77 58.8 1.35 58.42 1.7 57.64 2.43 56.68 3.29 55.58 4.25ZM 53.21 6.21C 53.16 6.13 53.11 6.05 53.07 5.97 53.02 5.9 52.98 5.82 52.93 5.75 52.88 5.67 52.82 5.59 52.77 5.52 52.72 5.45 52.67 5.38 52.61 5.31 52.55 5.24 52.49 5.17 52.43 5.1 52.38 5.03 52.32 4.97 52.26 4.91 52.19 4.84 52.13 4.77 52.06 4.71 50.97 3.66 49.47 3.01 47.83 3.01 44.48 3.01 41.75 5.7 41.75 9 41.75 10.01 42.01 10.96 42.45 11.79 42.5 11.87 42.55 11.95 42.59 12.03 42.64 12.1 42.68 12.18 42.73 12.25 42.78 12.33 42.84 12.41 42.89 12.48 42.94 12.55 42.99 12.62 43.05 12.69 43.1 12.76 43.17 12.83 43.23 12.9 43.28 12.97 43.34 13.03 43.4 13.09 43.46 13.16 43.53 13.23 43.6 13.29 44.69 14.34 46.19 14.99 47.83 14.99 51.18 14.99 53.91 12.3 53.91 9 53.91 7.99 53.65 7.04 53.21 6.21ZM 47.83 11.25C 46.57 11.25 45.55 10.24 45.55 9 45.55 7.76 46.57 6.75 47.83 6.75 49.09 6.75 50.11 7.76 50.11 9 50.11 10.24 49.09 11.25 47.83 11.25ZM 26.09 17.08C 21.12 17.08 17.56 13.43 17.56 8.91 17.56 8.91 17.56 8.87 17.56 8.87 17.56 4.36 21.17 0.66 26.14 0.66 31.11 0.66 34.68 4.31 34.68 8.82 34.68 8.82 34.68 8.87 34.68 8.87 34.68 13.38 31.06 17.08 26.09 17.08ZM 30.97 8.87C 30.97 6.15 28.95 3.88 26.09 3.88 23.24 3.88 21.26 6.1 21.26 8.82 21.26 8.82 21.26 8.87 21.26 8.87 21.26 11.59 23.29 13.86 26.14 13.86 28.99 13.86 30.97 11.64 30.97 8.91 30.97 8.91 30.97 8.87 30.97 8.87ZM 12.68 16.81C 12.68 16.81 0.74 16.81 0.74 16.81 0.33 16.81-0 16.48-0 16.08-0 16.08-0 14.59-0 14.59-0 14.31 0.1 14.04 0.29 13.82 0.29 13.82 8.86 3.99 8.86 3.99 8.86 3.99 1.01 3.99 1.01 3.99 0.61 3.99 0.28 3.67 0.28 3.27 0.28 3.27 0.28 1.66 0.28 1.66 0.28 1.26 0.61 0.93 1.01 0.93 1.01 0.93 12.68 0.93 12.68 0.93 13.08 0.93 13.41 1.26 13.41 1.66 13.41 1.66 13.41 3.15 13.41 3.15 13.41 3.43 13.31 3.7 13.12 3.92 13.12 3.92 4.56 13.75 4.56 13.75 4.56 13.75 12.68 13.75 12.68 13.75 13.08 13.75 13.41 14.07 13.41 14.47 13.41 14.47 13.41 16.08 13.41 16.08 13.41 16.48 13.08 16.81 12.68 16.81Z'; // eslint-disable-line max-len

function generateNextID() {
  nextID += 1;
  return nextID;
}

var ZooniverseLogotype = function ZooniverseLogotype(_ref) {
  var className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title;

  var logotypeID = generateNextID();
  return _react2.default.createElement(
    'svg',
    {
      role: 'img',
      viewBox: '0 0 178 18',
      width: width,
      height: height,
      'aria-labelledby': 'zooniverse-logotype_' + logotypeID,
      className: className
    },
    _react2.default.createElement(
      'title',
      { id: 'zooniverse-logotype_' + logotypeID },
      title
    ),
    _react2.default.createElement(
      'g',
      { fill: 'currentColor', stroke: 'none' },
      _react2.default.createElement('path', { fillRule: 'evenodd', d: PATH })
    )
  );
};

ZooniverseLogotype.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  title: _propTypes2.default.string,
  className: _propTypes2.default.string
};

ZooniverseLogotype.defaultProps = {
  width: '178px',
  height: '18px',
  title: 'Zooniverse Logotype',
  className: ''
};

exports.default = ZooniverseLogotype;