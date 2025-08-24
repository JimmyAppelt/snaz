import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width?: string // CSS width value like "80%", "400px", "100vw"
  height?: string // CSS height value like "auto", "300px", "50vh"
  priority?: boolean
  align?: 'left' | 'center' | 'right'
  aspectRatio?: string // like "16/9", "4/3", "1/1"
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Image = ({
  src,
  alt,
  width = '80%',
  height = 'auto',
  priority = false,
  align = 'left',
  aspectRatio,
  shadow = 'sm',
}: ImageProps) => {
  const alignClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[align]

  const shadowClass = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  }[shadow]

  // If aspectRatio is provided, use fill with container
  if (aspectRatio) {
    return (
      <div className={`flex ${alignClass}`}>
        <div
          className={`relative ${shadowClass}`}
          style={{
            width,
            aspectRatio,
          }}
        >
          <NextImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-contain border rounded"
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    )
  }

  // Fallback: use intrinsic sizing
  return (
    <div className={`flex ${alignClass}`}>
      <NextImage
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        style={{ width, height }}
        className={`w-auto h-auto border rounded ${shadowClass}`}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}
