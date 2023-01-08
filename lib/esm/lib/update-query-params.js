function parseQuery() {
  var query = window.location.search.replace('?', '').split('&');
  var params = {};
  query.forEach(string => {
    var [key, value] = string.split('=');
    if (key) {
      params[key] = value;
    }
  });
  return params;
}
export default function updateQueryParams(router, queryChange) {
  var nextQuery = Object.assign({}, parseQuery(), queryChange);
  return router.push({
    pathname: window.location.pathname,
    query: nextQuery
  });
}