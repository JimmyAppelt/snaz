'use client'

import { useLottie } from 'lottie-react'

import * as animationData from './not-found.json'

interface LottieNotFoundProps {
  className?: string
}

export function LottieNotFound({ className }: LottieNotFoundProps) {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  }

  const { View } = useLottie(defaultOptions)

  return <div className={className}>{View}</div>
}
