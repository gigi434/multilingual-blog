import React from 'react'
import Image from 'next/image'
export function CTACard() {
  return (
    <div className="relative px-6 overflow-hidden py-10 rouded-md bg-slate-100">
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
        <p className="mt-2 text-lg max-w-lg">
          Explore the world with me!Explore the world with me!Explore the world
          with me!
        </p>
        {/* News Letter Form */}
        <form className="flex items-center mt-6">
          <input
            placeholder="Write your email"
            type="text"
            className="bg-white/80 text-base px-3 py-2 rounded-md outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm"
          />
          <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
