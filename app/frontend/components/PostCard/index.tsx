import React from 'react'
import { Post } from '@/types/collection'
import Link from 'next/link'
import Image from 'next/image'
import { PostContent } from '@/components'

interface PostPostCardProps {
  post: Post
  layout?: 'vertical' | 'horizontal'
  reverse?: Boolean
}

export function PostCard({
  post,
  layout = 'horizontal',
  reverse = false,
}: PostPostCardProps) {
  return (
    <Link
      className={`${
        layout === 'horizontal'
          ? 'grid grid-cols-2 gap-10 items-center'
          : 'space-y-10'
      }`}
      href={`/post/${post.slug}`}
    >
      {/* Post Image */}
      <Image
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${
          reverse ? 'order-last' : ''
        }`}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      {/* Post Title */}
      <PostContent post={post} />
    </Link>
  )
}
