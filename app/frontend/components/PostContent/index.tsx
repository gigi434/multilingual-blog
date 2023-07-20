import React from 'react'
import { Post } from '@/types/collection'
import { ArrowRight } from 'lucide-react'
import { getReadingTime, getRelativeDate } from '@/lib'

interface PostContentProps {
  post: Post
}

export function PostContent({ post }: PostContentProps) {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex items-center gap-2 text-sm text-neutral-400">
        <div
          className={`font-medium ${
            post.category.title === 'Cities'
              ? 'text-emerald-600'
              : 'text-indigo-600'
          }`}
        >
          {post.category.title}
        </div>

        <div className="h-2 w-2 rounded-full bg-neutral-200"></div>
        <div>
          {`${post.author.first_name}`} {`${post.author.last_name}`}
        </div>
        <div className="h-2 w-2 rounded-full bg-neutral-200"></div>
        <div>{getReadingTime(post.body)}</div>
        <div className="h-2 w-2 rounded-full bg-neutral-200"></div>
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h2 className="font-medium @md:text-2xl @lg:text-3xl">{post.title}</h2>
      {/* Description */}
      <p className="text-base leading-snug text-neutral-600  @lg:text-lg">
        {post.description}
      </p>
      <div className="flex items-center gap-2 pt-3">
        Read More <ArrowRight size="14" />
      </div>
    </div>
  )
}
