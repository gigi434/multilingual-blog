type Platform =
  | 'facebook'
  | 'twitter'
  | 'youtube'
  | 'github'
  | 'linkedin'
  | 'instagram'

interface ISiteConfig {
  siteName: string
  description: string
  currentAt: string
  socialLinks: { platform: Platform; url: string }[]
}

export const siteConfig: ISiteConfig = {
  siteName: 'Exploror',
  description:
    'A minimal and lovely travel blog which shares experiences and citiest around the world.',
  currentAt: 'Budapest',
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com/makrdev' },
    { platform: 'youtube', url: 'https://youtube.com/makrdev' },
    { platform: 'github', url: 'https://github.com/makrdev' },
    { platform: 'linkedin', url: 'https://linkedin.com/makrdev' },
    { platform: 'instagram', url: 'https://instagram.com/makrdev' },
  ],
}
