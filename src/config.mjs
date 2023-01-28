import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'ShardMC',

  origin: 'https://shardmc.github.io',
  basePathname: '/',
  trailingSlash: false,

  title: 'ShardMC — Your Minecraft Server Core',
  description: '🚀 ShardMC is fast and customizeable Minecraft server core.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'aRxGCMha-zKKFyM6KT9PCfu0o4kVaoYIFQDijxiq9PI',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/post/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
