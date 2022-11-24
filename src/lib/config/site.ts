import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'strange-bargain-blog-rlnorthcutt.vercel.app',
  title: 'Strange Bargain',
  subtitle: 'Thoughts and musings about life',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Ron Northcutt',
    avatar: '/assets/ron-northcutt-headshot-2022-square.jpg',
    status: '🤟',
    bio: 'Open sourcerer, problem solver, melisma lifer'
  },
  themeColor: '#3D4451'
}
