import * as React from 'react'
import { siteConfig } from '@/config'
import { SocialLink, PaddingContainer } from '@/components'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="mt-10 border-t py-8">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="mt-2 max-w-md text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and Currently at */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="text-lg font-medium">#exploretheworld</div>
            <div className="mt-2 flex items-center gap-3 text-neutral-600">
              {siteConfig.socialLinks.map(({ platform, url }) => (
                <SocialLink key={platform} platform={platform} link={url} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-700">Currently At</div>
            <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md">
              <div className="h-2 w-2 rounded-full bg-emerald-600" />
              {siteConfig.currentAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t py-3" />
        {/* Copyrights */}
        <div className="text-sm text-neutral-400">
          All rights are reserved | Copyright {new Date().getFullYear()}
        </div>
        {/* Author Link */}
        <div className="text-sm">
          Made with love by{' '}
          <Link
            href="https://twitter.com/makrdev"
            className="underline underline-offset-4"
          >
            @makrdev
          </Link>
        </div>
      </PaddingContainer>
    </div>
  )
}
