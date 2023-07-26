import { DUMMY_POSTS } from '@/DUMMY_DATA'
import React from 'react'
import { notFound } from 'next/navigation'
import { CTACard, PaddingContainer, PostBody, PostHero } from '@/components'
import { SocialLink } from '@/components'

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

export default function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }
  return (
    <PaddingContainer>
      <div className="space-y-10">
        {/* Hero */}
        <PostHero post={post} />
        {/* Body and Social Links */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex gap-5 md:flex-col">
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          {/* Post Body */}
          <PostBody body={post.body} />
        </div>
        {/* CTA */}
        <CTACard />
      </div>
    </PaddingContainer>
  )
}
