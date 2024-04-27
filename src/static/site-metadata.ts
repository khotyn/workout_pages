interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Khotyn\'s Workouts',
  siteUrl: 'https://khotyn.com',
  logo: 'https://avatars.githubusercontent.com/u/584455?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://khotyn.com',
    },
    {
      name: 'About',
      url: 'https://khotyn.com/blog/about/',
    },
  ],
};

export default data;
