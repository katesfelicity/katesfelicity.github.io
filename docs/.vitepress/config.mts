import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kate's Corner",
  description: "Personal Kate Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'img/logo_blue.svg',
      dark: 'img/logo_orange.svg'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },
      { text: 'Gallery', link: '/markdown-examples' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/monstertau' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dungvu172/' },
      { icon: 'facebook', link: 'https://www.facebook.com/vutrung.dung.99' },

    ],
    footer: {
      message: 'Make with love <3',
      copyright: '© 2024 Huypq44, all rights reserved',
    },
  }
})
