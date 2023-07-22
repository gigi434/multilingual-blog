import { DUMMY_POSTS } from '@/DUMMY_DATA'
import React from 'react'
import { notFound } from 'next/navigation'
import { PaddingContainer, PostHero } from '@/components'
import Image from 'next/image'

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
      {/* Hero */}
      <PostHero post={post} />
      {/* Body */}
      <div className="mt-10 flex gap-10">
        {/* Social Links */}
        <div className="relative">
          <div className="sticky top-20">Share</div>
        </div>
        {/* Post Body */}
        <div className="h-[1200px] bg-slate-200">Post Body</div>
      </div>
    </PaddingContainer>
  )
}
