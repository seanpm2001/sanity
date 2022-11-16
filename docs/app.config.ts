export default defineAppConfig({
  docus: {
    title: 'Nuxt Sanity',
    layout: 'docs',
    url: 'https://sanity.nuxtjs.org/',
    description: 'Access text, images, and other media with Nuxt and the Sanity headless CMS.',
    socials: { twitter: 'nuxt_js', github: 'nuxt-modules/sanity' },
    debug: false,
    github: { root: 'docs/content', edit: true, releases: true },
    cover: { src: '/cover.jpg', alt: 'A screenshot of the Nuxt Sanity module.' },
    header: { title: false, logo: true },
    footer: {
      credits: [
        {
          icon: 'IconDocus',
          text: 'Powered by Docus',
          href: 'https://docus.com',
        },
      ],
      icons: [
        {
          label: 'Nuxt',
          href: 'https://nuxtjs.org',
          component: 'IconNuxt',
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope',
        },
      ],
    },
  },
})
