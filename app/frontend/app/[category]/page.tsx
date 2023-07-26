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
  const category = DUMMY_CATEGORIES.find(
    (category) => category.slug === params.category,
  )
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category,
  )
  return (
    <PaddingContainer>
      {/* Category */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostList posts={posts} />
    </PaddingContainer>
  )
}
