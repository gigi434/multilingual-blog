interface ISiteConfig {
  siteName: string
  description: string
  currentAt: string
  socialLinks: {
    twitter: string
    youtube: string
    github: string
    linkedin: string
    instagram: string
  }
}

export const siteConfig: ISiteConfig = {
  siteName: 'Exploror',
  description:
    'A minimal and lovely travel blog which shares experiences and citiest around the world.',
  currentAt: 'Budapest',
  socialLinks: {
    twitter: 'https://twitter.com/makrdev',
    youtube: 'https://youtube.com/makrdev',
    github: 'https://github.com/makrdev',
    linkedin: 'https://linkedin.com/makrdev',
    instagram: 'https://instagram.com/makrdev',
  },
}
