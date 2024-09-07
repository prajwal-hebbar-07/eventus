import EventsList from '@/components/events-list'
import FilterForm from '@/components/filter-form'
import { getAllEvents } from '@/data/events'

export default function AllEventsPage() {
  const events = getAllEvents()

  return (
    <div>
      <div className='w-5/12 mx-auto my-8'>
        <FilterForm />
      </div>
      <EventsList events={events} />
    </div>
  )
}
