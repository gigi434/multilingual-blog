import React from 'react'
import { Post } from '@/types/collection'
import Link from 'next/link'
import Image from 'next/image'
import { PostContent } from '@/components'

interface PostPostCardProps {
  post: Post
}

export function PostCard({ post }: PostPostCardProps) {
  return (
    <Link
      className="grid grid-cols-2 gap-10 items-center"
      href={`/post/${post.slug}`}
    >
      {/* Post Image */}
      <Image
        className="rounded-md w-full object-cover object-center max-h-[300px]"
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
