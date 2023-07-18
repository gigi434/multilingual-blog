import * as React from 'react'
import { siteConfig } from '@/config'
import { SocialLink, PaddingContainer } from '@/components'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and Currently at */}
        <div className="flex justify-between gap-4 flex-wrap mt-6">
          <div>
            <div className="font-medium text-lg">#exploretheworld</div>
            <div className="flex items-center gap-3 text-neutral-600 mt-2">
              {siteConfig.socialLinks.map(({ platform, url }) => (
                <SocialLink key={platform} platform={platform} link={url} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-700">Currently At</div>
            <div className="px-3 py-2 bg-white rounded-md shadow-md flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-600" />
              {siteConfig.currentAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="py-3 border-t flex flex-wrap items-center gap-4 mt-16" />
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
