import { Post } from '@/types/collection'
import { PostContent } from '@/components'
import Image from 'next/image'
interface PostHeroProps {
  post: Post
}

export function PostHero({ post }: PostHeroProps) {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        className="mt-6 h-[300px] rounded-md object-cover object-center md:h-[500px]"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${post.image}`}
        width={1200}
        height={500}
        alt={post.title}
      />
    </div>
  )
}
