import { useRouter } from 'next/router'

import { getEventById } from '@/data/events'

export default function EventDetailsPage() {
  const router = useRouter()
  const id = router.query.event_id
  const event = getEventById(id)

  if (!event) {
    return (
      <div className='md:container mx-auto h-screen flex flex-col justify-center items-center'>
        <p className='text-center text-5xl font-bold text-red-600'>
          No Event Found!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1>Event Details Page</h1>
    </div>
  )
}
