import { DUMMY_POSTS } from '@/DUMMY_DATA'
import React from 'react'
import { notFound } from 'next/navigation'
import { CTACard, PaddingContainer, PostBody, PostHero } from '@/components'
import { SocialLink } from '@/components'
import { directusClient } from '@/lib'

export const generateStaticParams = async () => {
  try {
    const posts = await directusClient.items('post').readByQuery({
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['slug'],
    })

    const params = posts?.data?.map((post) => {
      return {
        slug: post.slug as string,
      }
    })

    return params || []
  } catch (error) {
    console.log('Error fetching posts data' + error)
  }
}

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const getPostData = async () => {
    try {
      const post = await directusClient.items('post').readByQuery({
        filter: {
          slug: {
            _eq: params.slug,
          },
        },
        fields: [
          '*',
          'category.id',
          'category.title',
          'author.id',
          'author.first_name',
          'author.last?name',
        ],
      })

      return post?.data?.[0]
    } catch (error) {
      throw new Error('Error')
    }
  }

  const post = await getPostData()

  if (!post) {
    notFound()
  }
  return (
    <PaddingContainer>
      <div className="space-y-10">
        {/* Hero */}
        <PostHero post={post} />
        {/* Body and Social Links */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex gap-5 md:flex-col">
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          {/* Post Body */}
          <PostBody body={post.body} />
        </div>
        {/* CTA */}
        <CTACard />
      </div>
    </PaddingContainer>
  )
}
