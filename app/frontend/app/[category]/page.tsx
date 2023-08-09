import { DUMMY_POSTS, DUMMY_CATEGORIES } from '@/DUMMY_DATA'
import { PaddingContainer, PostList } from '@/components'
import { directusClient } from '@/lib'
import { Category, Post } from '@/types/collection'
import { notFound } from 'next/navigation'
export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    }
  })
}

export default async function Page({
  params,
}: {
  params: {
    category: string
  }
}) {
  const getCategoryData = async () => {
    try {
      const response = await directusClient.items('category').readByQuery({
        filter: {
          slug: {
            _eq: params.category,
          },
        },
        fields: [
          '*',
          'posts.*',
          'posts.author.id',
          'posts.author.first_name',
          'posts.author.last_name',
          'posts.category.id',
          'posts.category.title',
        ],
      })
      const data: Category[] = response.data || []
      const category = data?.[0]

      return category
    } catch (error) {
      throw new Error('Error fetching category')
    }
  }

  const category = await getCategoryData()

  if (!category) {
    notFound()
  }

  const typeCorrectedCategory = category as unknown as {
    id: string
    title: string
    description: string
    slug: string
    posts: Post[]
  }

  return (
    <PaddingContainer>
      {/* Category */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">
          {typeCorrectedCategory?.title}
        </h1>
        <p className="text-lg text-neutral-600">
          {typeCorrectedCategory?.description}
        </p>
      </div>
      <PostList posts={typeCorrectedCategory?.posts} />
    </PaddingContainer>
  )
}
