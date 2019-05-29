module.exports = {
  pathPrefix: '/docs/community',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        subtitle: 'Community',
        description: 'Get involved the Apollo Community',
        contentDir: 'source',
        githubRepo: 'apollographql/community',
        sidebarCategories: {
          null: [
            'index',
            'contributing',
            'code-of-conduct',
            'graphql-events',
            'apollo-mission-briefing'
          ]
        }
      }
    }
  ]
};
