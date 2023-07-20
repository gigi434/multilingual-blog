import { DUMMY_POSTS, DUMMY_CATEGORIES } from '@/DUMMY_DATA'

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
  return <div>{JSON.stringify(posts)}</div>
}
