import React from 'react'

type PaddingContainerProps = {
  children: React.ReactNode
}

export function PaddingContainer({ children }: PaddingContainerProps) {
  return <div className="mx-auto w-full max-w-7xl px-8">{children}</div>
}

export default PaddingContainer
