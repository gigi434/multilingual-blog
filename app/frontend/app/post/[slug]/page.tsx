import { DUMMY_POSTS } from '@/DUMMY_DATA'
import React from 'react'

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
  return <div>{post?.title}</div>
}
