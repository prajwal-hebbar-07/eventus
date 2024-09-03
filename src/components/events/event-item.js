import Link from 'next/link'

export default function EventItem({ id, title, location, date, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = location.replace(', ', '\n')

  return (
    <li className='list-none rounded-lg bg-white my-4 flex flex-row w-[42rem]'>
      <img
        src={`/${image}`}
        alt={title}
        className='h-52 w-auto rounded-l-lg object-contain'
      />
      <div className='mx-4 my-auto w-full'>
        <h2 className='text-2xl font-bold text-zinc-800 mb-2'>{title}</h2>
        <time className='text-base my-2 text-neutral-500'>
          {humanReadableDate}
        </time>
        <address
          style={{ whiteSpace: 'pre-wrap' }}
          className='text-xs my-1 text-neutral-500'>
          {formattedAddress}
        </address>
        <div className='mt-4 float-right'>
          <Link
            href={`/events/${id}`}
            className='py-2 px-4 bg-emerald-500 rounded-lg text-zinc-200 font-medium'>
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  )
}
