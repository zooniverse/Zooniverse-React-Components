Zooniverse-React-Components
===========================

Build works against Node 16 and NPM 8.

What the repo name says

`npm ci` to install dependencies

Components should be added to the `src/components` folder and an export to `src/index.js`

Any default styles can be added as a stylus file in `src/css`.

`npm test` to run mocha tests

`npm version [semver new version]` will run helper preversion and postversion scripts. `preversion` will run the tests. `version` will run `npm run build` which will build the production css and js. `postversion` will push the updated repo and the updated git tag to github.

## Contributing

If you're using `npm link` to test the library with your app, then you may need to adjust your webpack configuration for compiling of your javascript files in development. Webpack docs do provide a cautionary note about using symlink packages with Webpack: https://webpack.js.org/configuration/module/#rule-conditions. An example webpack configuration:

```
{
  test: /\.jsx?$/,
  include: path.resolve(__dirname, 'src'),
  exclude: path.resolve(__dirname, 'node_modules'),
  use: [
    'babel-loader'
    // 'eslint-loader' uncomment if you want to use eslint while compiling
  ]
}
```

## Publishing

1. Add the new version to the changelog.
2. `npm version major|minor|patch` to test, build, and push a new tagged version. https://github.com/zooniverse/Zooniverse-React-Components/blob/3b9a027132e85480b6882fa53129186ef4a128a1/package.json#L16-L19
3. Publish the new tag as a release on GitHub.
4. `npm publish --dry-run` to double-check the release.
5. `npm publish`.
