import { CTACard, PaddingContainer, PostCard, PostList } from '@/components'
import { directusClient } from '@/lib'
import { notFound } from 'next/navigation'

export default async function Home() {
  const getAllPosts = async () => {
    try {
      const posts = await directusClient.items('post').readByQuery({
        fields: [
          '*',
          'author.id',
          'author.first_name',
          'author.last_name',
          'category.id',
          'category.title',
        ],
      })

      return posts.data
    } catch (error) {
      throw new Error('Error fetching posts')
    }
  }

  const posts = await getAllPosts()

  if (!posts) {
    notFound()
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList
          posts={posts.filter((post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard post={posts[3]} reverse={true} />
        <PostList
          posts={posts.filter((post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  )
}
