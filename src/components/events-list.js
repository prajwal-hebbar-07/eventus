import EventItem from './event-item'

export default function EventsList({ events }) {
  return (
    <ul className='flex flex-col items-center'>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  )
}
