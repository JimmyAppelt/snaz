import { Box, Wand, Info, RectangleEllipsis } from 'lucide-react'
import type { MetaRecord } from 'nextra'

interface MenuIconProps {
  icon: React.ComponentType<{ size?: number }>
  title: string
}

function MenuIcon({ icon: Icon, title }: MenuIconProps) {
  return (
    <span className="flex items-center gap-1.5">
      <Icon size={16} />
      <span>{title}</span>
    </span>
  )
}

const GUIDE: MetaRecord = {
  index: 'Home',

  // Modules Section
  '---modules': {
    type: 'separator',
    title: <MenuIcon icon={Box} title="Modules" />,
  },
  time: 'Time',
  date: 'Date',
  countdown: 'Countdown',
  'chrono-down': 'Chrono Down',
  'chrono-up': 'Chrono Up',
  twitch: 'Twitch',
  'system-info': 'System info',
  'dynamic-files': 'Dynamic Files',
  'playing-now': {
    title: 'Playing Now',
    items: {
      overview: 'Overview',
      players: 'Players',
      'json-data': 'Now Playing Json',
      'spotify-credentials': 'Spotify API Credentials',
      'json-html-css-js-example': 'JSON HTML CSS JS example',
    },
  },

  // How To Section
  '---how-to': {
    type: 'separator',
    title: <MenuIcon icon={Wand} title="How To" />,
  },
  obs: 'OBS',
  'run-two-instances-of-snaz': 'Run two instances of Snaz',
  'how-to-perform-a-fresh-installation': 'How to perform a fresh installation',

  // Download Section
  '---help': {
    type: 'separator',
    title: <MenuIcon icon={Info} title="Help" />,
  },
  'solving-warning-or-error-within-system-info': 'Solving warning or error within System Info',

  // FAQ Section
  '---more': {
    type: 'separator',
    title: <MenuIcon icon={RectangleEllipsis} title="More" />,
  },
  faq: 'FAQ',
}

export default {
  index: {
    type: 'page',
    display: 'hidden',
  },
  docs: {
    type: 'page',
    title: 'Documentation',
    items: GUIDE,
  },
  download: {
    type: 'page',
    title: 'Download',
    href: 'https://github.com/JimmyAppelt/snaz/releases',
  },
}
