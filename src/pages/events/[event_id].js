import { useRouter } from 'next/router'

import { getEventById } from '@/data/events'

export default function EventDetailsPage() {
  const router = useRouter()
  const id = router.query.event_id
  const event = getEventById(id)

  const humanReadableDate = new Date(event?.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = event?.location.replace(', ', '\n')

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
    <div className='md:container mx-auto h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl text-sky-700 mb-8 drop-shadow-lg font-bold'>
        {event.title}
      </h1>
      <div className='mt-4 w-[42rem] p-12 rounded-xl h-[20rem] bg-[#dda15e] flex flex-row justify-around items-center'>
        <img
          className='rounded-full w-[16rem] h-[16rem]'
          src={`/${event.image}`}
          alt={event.title}
        />
        <div>
          <time className='my-4 text-2xl font-bold text-zinc-900'>
            {humanReadableDate}
          </time>
          <address className='my-4 text-2xl font-bold whitespace-pre-wrap text-slate-600'>
            {formattedAddress}
          </address>
        </div>
      </div>
      <p className='my-8 text-3xl font-medium text-neutral-500 w-8/12 tracking-wide leading-relaxed text-center'>
        {event.description}
      </p>
    </div>
  )
}
