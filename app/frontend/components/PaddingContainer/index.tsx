import React from 'react'

type PaddingContainerProps = {
  children: React.ReactNode
}

export function PaddingContainer({ children }: PaddingContainerProps) {
  return <div className="px-8 w-full max-w-7xl mx-auto">{children}</div>
}

export default PaddingContainer
