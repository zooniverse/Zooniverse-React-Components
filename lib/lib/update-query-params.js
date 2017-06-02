'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var parseQuery = function parseQuery() {
  var query = window.location.search.replace('?', '').split('&');
  var params = {};

  Array.from(query).forEach(function (string) {
    var _Array$from = Array.from(string.split('=')),
        _Array$from2 = _slicedToArray(_Array$from, 2),
        key = _Array$from2[0],
        value = _Array$from2[1];

    if (key) {
      params[key] = value;
    }
  });

  return params;
};

var updateQueryParams = function updateQueryParams(router, queryChange) {
  var nextQuery = Object.assign({}, parseQuery(), queryChange);
  return router.push({
    pathname: window.location.pathname,
    query: nextQuery
  });
};

exports.default = updateQueryParams;