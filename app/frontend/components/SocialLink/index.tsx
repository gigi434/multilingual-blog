import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
} from 'lucide-react'
import * as React from 'react'

interface ISocialLink {
  platform: string
  link: string
}

export function SocialLink({ platform, link }: ISocialLink) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={18} />
      case 'twitter':
        return <Twitter size={18} />
      case 'instagram':
        return <Instagram size={18} />
      case 'youtube':
        return <Youtube size={18} />
      case 'linkedin':
        return <Linkedin size={18} />
      case 'github':
        return <Github size={18} />
    }
  }

  return <Link href={link}>{getIcon(platform)}</Link>
}
