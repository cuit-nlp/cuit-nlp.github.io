import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Chengdu University of Information Technology',
  description: 'home page of CUIT-NLP group',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research', link: '/research' },
      { text: 'Our Team', link: '/team' },
      { text: 'Publications', link: '/publications' },
      { text: 'Contact', link: '/contact' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ]
  },
});
