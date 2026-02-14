import cn from 'clsx'
import Image from 'next/image'

import logo from '@/public/logo.png'

export const Logo = () => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 with-image-logo',
        'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
        '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
        'hover:[mask-position:100%]',
      )}
    >
      <Image src={logo} alt="Snaz" width={48} height={48} />
      <span className="ml-1 text-slate-900 dark:text-slate-100 font-light text-[1.6rem]">Snaz</span>
    </div>
  )
}
