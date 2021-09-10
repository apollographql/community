const themeOptions = require("gatsby-theme-apollo-docs/theme-options");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        pathPrefix: "/docs/community",
        baseDir: undefined,
        subtitle: "Community",
        description: "Get involved the Apollo Community",
        githubRepo: "apollographql/community",
        sidebarCategories: {
          null: [
            "index",
            "contributing",
            "blog-post-contributions",
            "code-of-conduct",
            "graphql-events",
            "apollo-mission-briefing",
            "streaming-at-apollo",
          ],
        },
      },
    },
  ],
};
