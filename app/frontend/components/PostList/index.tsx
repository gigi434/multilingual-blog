import { Post } from '@/types/collection'
import { PostCard } from '@/components'
type PostListProps = {
  posts: Post[]
  layout?: 'vertical' | 'horizontal'
}
export function PostList({ posts, layout = 'vertical' }: PostListProps) {
  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} layout={layout} />
      ))}
    </div>
  )
}
