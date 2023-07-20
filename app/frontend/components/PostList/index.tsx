import { Post } from '@/types/collection'
import { PostCard } from '@/components'
type PostListProps = {
  posts: Post[]
  layout?: 'vertical' | 'horizontal'
}
export function PostList({ posts, layout = 'vertical' }: PostListProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} layout={layout} />
      ))}
    </div>
  )
}
