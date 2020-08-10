const config = {
  // Site info
  siteTitle: "Gooddogs.com Developer Blog", // Site title.
  siteTitleShort: "Developer Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Gooddogs Blog", // Alternative site title for SEO.
  siteLogo: "/logos/gdlogo.png", // Logo used for SEO and manifest.
  siteUrl: "https://gooddogs.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A Software Developer's Blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-174944720-1", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "gooddogs-com", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to the Home Page",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Search",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
  ],
  // Use for user info
  userName: "Steve Fabian", // Username to display in the author segment.
  userEmail: "steve@gooddogs.com", // Email used for RSS feed"s author segment
  userTwitter: "SteveFabian", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Carolina, USA", // User location to display in the author segment.
  userAvatar: "http://www.gravatar.com/avatar/b3763f8692e3c5c09d0fb4c1ba3a3d78?s=100&d=wavatar", // User avatar to display in the author segment.
  userDescription:
    "Software Architect, Web Developer, Mentor.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:steve@gooddogs.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://gooddogs.com/",
      iconClassName: "fas globe"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/SteveFabian",
      iconClassName: "fab twitter"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/SteveFabian/", 
      iconClassName: "fab facebook-f" 
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/in/steve-fabian-b376543/", 
      iconClassName: "fab linkedin-in"
    },
  ],
  // Use for navigation
  navTitle: "Software Architecture, Developer Efficiency",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "GitHub",
      url: "https://github.com/stevefabian",
      iconClassName: "fab github"
    },
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/steve.fabian.944/", 
      iconClassName: "fab facebook-f"
    },
    { 
      label: "Linkedin", 
      url: "https://www.linkedin.com/in/steve-fabian-b376543/", 
      iconClassName: "fab linkedin-in"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/SteveFabian",
      iconClassName: "fab twitter"
    },
    {
      label: "RSS",
      url: "https://gooddogs.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://gooddogs.netlify.com/sitemap.xml" },
  ],
  copyright: "Copyright © 2020 Gooddogs.com. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
