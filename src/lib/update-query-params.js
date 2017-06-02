const parseQuery = function parseQuery() {
  const query = window.location.search.replace('?', '').split('&');
  const params = { };

  Array.from(query).forEach((string) => {
    const [key, value] = Array.from(string.split('='));
    if (key) { params[key] = value; }
  });

  return params;
};

export default function(router, queryChange) {
  const nextQuery = Object.assign({ }, parseQuery(), queryChange);
  return router.push({
    pathname: window.location.pathname,
    query: nextQuery,
  });
}
