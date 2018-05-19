module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Ornous.com - Blog",
        short_name: "Blog ornous.com",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/img/logo.png",
      },
    }
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
