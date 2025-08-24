import * as Annotations from '@/components/annotations'

interface VideoProps {
  src: string
  align?: 'left' | 'center' | 'right'
  width?: string
}

export const Video = ({ src, align = 'center', width = '100%' }: VideoProps) => {
  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[align]

  const isYoutube = src.includes('youtube.com') || src.includes('youtu.be')
  const showPlaylistAnnotation =
    isYoutube && (src.includes('playlist') || src.includes('videoseries'))

  return (
    <>
      {showPlaylistAnnotation && (
        <div className="flex justify-end mt-10 mb-[-30px] mr-[35px] animate-fade-in">
          <Annotations.Playlist />
        </div>
      )}
      <div className={`flex ${justifyClass} my-10`}>
        <iframe
          className="rounded-xl"
          loading="lazy"
          src={src}
          allowFullScreen
          title="Video"
          style={{
            aspectRatio: '16 / 9',
            width: `${width} !important`,
          }}
        />
      </div>
    </>
  )
}
