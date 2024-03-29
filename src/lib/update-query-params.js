function parseQuery() {
  const query = window.location.search.replace('?', '').split('&');
  const params = { };

  query.forEach((string) => {
    const [key, value] = string.split('=');
    if (key) { params[key] = value; }
  });

  return params;
}

export default function updateQueryParams(router, queryChange) {
  const nextQuery = { ...parseQuery(), ...queryChange };
  return router.push({
    pathname: window.location.pathname,
    query: nextQuery,
  });
}
