import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Wiki',
      href: getPermalink('/wiki/intro'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Downloads', href: getPermalink('/get') }],
};

export const footerData = {
  links: [
    {
      title: 'For Players',
      links: [
        { text: 'Quickstart', href: getPermalink('/post/getting-started') },
        { text: 'Wiki', href: getPermalink('/wiki/for-players/') },
      ],
    },
    {
      title: 'For Developers',
      links: [{ text: 'Docs', href: getPermalink('/wiki/for-developers/') }],
    },
    {
      title: 'ShardMC Project',
      links: [
        { text: 'Team & Contributors', href: getPermalink('/contributors') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/CqVAzakrqx' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shardmc/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/favicon.png)]"></span>
    ShardMC Project · ShardMC is not affiliated with Mojang.
  `,
};
