import { NotFoundPage } from 'nextra-theme-docs'

import { LottieNotFound } from '@/components/lottie'

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <LottieNotFound className="w-3/12 opacity-90" />
      <h1>The page is not found</h1>
    </NotFoundPage>
  )
}
