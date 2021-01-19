# typedoc-plugin-graphql

> This typedoc plugin adds support for GraphQL code highlighting.

[![Package version](https://img.shields.io/npm/v/typedoc-plugin-graphql)](https://www.npmjs.com/package/typedoc-plugin-graphql)
![License](https://img.shields.io/npm/l/typedoc-plugin-graphql)

## Installation

This plugin is published as an [npm package][npm]. You can install it through npm or yarn.

```
# Using yarn
yarn add typedoc-plugin-graphql

# Using npm
npm install typedoc-plugin-graphql
```

Once installed, typedoc will automatically detect and use it.

## Example

This below example will now properly render and highlight the GraphQL in the comment.

````typescript
/**
 * Queries for Blog Posts
 *
 * ```graphql
 * query BlogPostQuery {
 *   latestPosts(limit: 10) {
 *     url
 *     summary
 *     content
 *     datePosted
 *   }
 * }
 * ```
 */
@customElement('blog-posts')
class BlogPosts extends ApolloQuery<Data, Variables> {
  query = BlogPostQuery;
  // ...
}
````

## Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/package/typedoc-plugin-graphql
