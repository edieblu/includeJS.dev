module.exports = {
  siteMetadata: {
    title: 'includeJS',
    description: 'Beginner friendly Javascript meetups for women'
  },
  plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js')
      }
    }
  }
],
}