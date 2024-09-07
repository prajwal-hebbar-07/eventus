import Button from './button'

export default function ErrorAlert({ children }) {
  return (
    <>
      <div className='mx-auto mt-8 rounded-xl w-8/12 py-6 px-2 bg-fuchsia-400/50'>
        <p className='text-2xl text-center text-violet-700'>{children}</p>
      </div>
      <div className='mt-8 text-center'>
        <Button link='/events'>All Events</Button>
      </div>
    </>
  )
}
