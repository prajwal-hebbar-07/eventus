import EventsList from '@/components/events-list'
import { getAllEvents } from '@/data/events'

export default function AllEventsPage() {
  const events = getAllEvents()

  return (
    <div>
      <EventsList events={events} />
    </div>
  )
}
