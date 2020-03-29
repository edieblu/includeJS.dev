module.exports = {
  siteMetadata: {
    title: 'includeJS',
    description: 'Beginner friendly Javascript meetups for women',
    siteUrl: 'https://includejs.dev/TIL/'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
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
        extensions: [`.mdx`],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/posts" + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + "/posts" + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date]},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "includeJS - Today I Learned - RSS Feed",
            match: "^/posts/"
          }
        ]
      }
    },
  ],
};
