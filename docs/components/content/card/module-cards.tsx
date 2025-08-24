import {
  Clock,
  Calendar,
  Timer,
  ArrowDown,
  ArrowUp,
  Users,
  FileText,
  Monitor,
  FolderOpen,
  Music,
} from 'lucide-react'

import { Card } from '@/components'

export function ModuleCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <Card
        title="Time"
        icon={<Clock className="w-5 h-5" />}
        description="Display current system time with customizable formatting for overlays and streams"
        variant="default"
        href="/docs/time"
      />

      <Card
        title="Date"
        icon={<Calendar className="w-5 h-5" />}
        description="Show current system date with various format options for different regions and preferences"
        variant="default"
        href="/docs/date"
      />

      <Card
        title="Countdown"
        icon={<Timer className="w-5 h-5" />}
        description={
          <>
            Live countdown timer to a specific date/time
            <br />
            <span className="text-sm italic">(Example: Stream starts in: 2h 30m 12s)</span>
          </>
        }
        variant="default"
        href="/docs/countdown"
      />

      <Card
        title="Chrono Down"
        icon={<ArrowDown className="w-5 h-5" />}
        description="Countdown timer that decreases from a set value, perfect for break timers or event durations"
        variant="default"
        href="/docs/chrono-down"
      />

      <Card
        title="Chrono Up"
        icon={<ArrowUp className="w-5 h-5" />}
        description="Stopwatch-style timer that counts up from zero or a specified starting value"
        variant="default"
        href="/docs/chrono-up"
      />

      <Card
        title="Twitch"
        icon={<Users className="w-5 h-5" />}
        description={
          <>
            Real-time Twitch viewer count display
            <br />
            <span className="text-xs italic">(module omitted in v1.12.7.0, use v1.12.6.0)</span>
          </>
        }
        variant="default"
        href="/docs/twitch"
      />

      <Card
        title="Textline Changer"
        icon={<FileText className="w-5 h-5" />}
        description="Dynamically cycle through multiple text lines in a single output file for rotating messages"
        variant="default"
      />

      <Card
        title="System Info"
        icon={<Monitor className="w-5 h-5" />}
        description="Real-time system monitoring displaying CPU usage, RAM consumption, active processes, and network speeds"
        variant="default"
        href="/docs/system-info"
      />

      <Card
        title="Dynamic Files"
        icon={<FolderOpen className="w-5 h-5" />}
        description="Generate custom text or image files linked to online data sources for live content updates"
        variant="default"
        href="/docs/dynamic-files"
      />

      <Card
        title="Playing Now"
        icon={<Music className="w-5 h-5" />}
        description={
          <>
            Currently playing music information including artist, album, and track details
            <br />
            <span className="text-xs italic">(module omitted in v1.12.7.0, use v1.12.6.0)</span>
          </>
        }
        variant="default"
        href="/docs/playing-now/overview"
      />
    </div>
  )
}
