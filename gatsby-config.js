module.exports = {
  siteMetadata: {
    title: 'includeJS',
    description: 'Beginner friendly Javascript meetups for women',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/post-preview.js"),
          default: require.resolve('./src/components/layout.js'),
        },
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
