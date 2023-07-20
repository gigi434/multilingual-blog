import { DUMMY_POSTS, DUMMY_CATEGORIES } from '@/DUMMY_DATA'
import { PaddingContainer, PostList } from '@/components'

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    }
  })
}

export default function Page({
  params,
}: {
  params: {
    category: string
  }
}) {
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category,
  )
  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  )
}
