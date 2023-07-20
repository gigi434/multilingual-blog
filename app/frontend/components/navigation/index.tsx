import Link from 'next/link'
import React from 'react'
import { PaddingContainer } from '@/components'

export function Navigation() {
  return (
    <div className="sticky inset-x-0 top-0 border-b bg-white/50 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-6 ">
          <Link href="/" className="text-lg font-bold">
            Explorer
          </Link>
          {/* category links */}
          <nav>
            <ul className="flex items-center gap-4 text-neutral-700">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiencies">Experiencies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  )
}
