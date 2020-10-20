require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Jeana~May',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: '89afb82f1f7e93f114e757a1c85b14' },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'YWE3MWJjZDAtOTJmMC00ZTk0LWI5NDctYjA0YmQ5Mjc5NWJlNjM3MjcxMjYyMDA3NTMyNzgz',
        autopop: false
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Dr Sugiyama`,
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
}
