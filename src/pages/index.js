import EventsList from '@/components/events-list'
import { getFeaturedEvents } from '@/data/events'

export default function HomePage() {
  const events = getFeaturedEvents()

  return (
    <main className='container mx-auto'>
      <h1>Home Page</h1>
      <EventsList events={events} />
    </main>
  )
}
