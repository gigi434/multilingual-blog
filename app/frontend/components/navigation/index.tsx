import Link from 'next/link'
import React from 'react'
import { PaddingContainer } from '@/components/layout/PaddingContainer'

export function Navigation() {
  return (
    <div className="sticky top-0 left-0 right-0 border-b bg-white bg-opacity-50 backdrop-blur-md">
      <PaddingContainer>
        <div className="py-6 flex justify-between items-center border-b ">
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
