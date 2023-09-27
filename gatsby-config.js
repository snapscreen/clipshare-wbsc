require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Clipshare`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WBSC ClipShare`,
        short_name: `WBSC`,
        start_url: `/`,
        background_color: `#15253e`,
        theme_color: `#15253e`,
        display: `minimal-ui`,
        icon: `src/images/ClipShare_Icon.svg`, // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  ]
};
