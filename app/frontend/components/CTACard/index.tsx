import React from 'react'
import Image from 'next/image'
import { directusClient } from '@/lib'

export async function CTACard() {
  const SignUpHandler = async (formData: FormData) => {
    'use server'
    try {
      const email = formData.get('email')
      await directusClient.items('subscribers').createOne({
        email,
      })
    } catch (err) {}
  }
  return (
    <div className="relative overflow-hidden rounded-md bg-slate-100 px-6 py-10">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30"></div>
      {/* Background Image */}
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <div className="text-4xl font-semibold">Explore the world with me!</div>
        <p className="mt-2 max-w-lg text-lg">
          Explore the world with me!Explore the world with me!Explore the world
          with me!
        </p>
        {/* News Letter Form */}
        <form className="mt-6 flex w-full items-center" action={SignUpHandler}>
          <input
            name="email"
            placeholder="Write your email"
            type="email"
            className="w-full rounded-md bg-white/80 px-3 py-2 text-base outline-none ring-neutral-600 placeholder:text-sm focus:ring-2 md:w-auto"
          />
          <button className="whitespace-nowrap rounded-md bg-neutral-900 px-3 py-2 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
