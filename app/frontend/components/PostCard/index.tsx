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
      className={`@container ${
        layout === 'horizontal'
          ? 'grid grid-cols-1 items-center gap-10 md:grid-cols-2 '
          : 'space-y-10'
      }`}
      href={`/post/${post.slug}`}
    >
      {/* Post Image */}
      <Image
        className={`h-full max-h-[300px] w-full rounded-md object-cover object-center ${
          reverse ? 'md:order-last' : ''
        }`}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      {/* Post Title */}
      <PostContent isPostPage={false} post={post} />
    </Link>
  )
}
