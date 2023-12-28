import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Wiki',
      href: getPermalink('/wiki/intro'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Arte',
          href: getPermalink('/projects/arte/about'),
        },
      ],
      href: getPermalink('/projects'),
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
