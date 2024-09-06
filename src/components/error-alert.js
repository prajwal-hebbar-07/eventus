export default function ErrorAlert({ children }) {
  return (
    <>
      <div className='mx-auto py-6 px-2 bg-fuchsia-400/50'>
        <p className='text-2xl text-center text-violet-700'>{children}</p>
      </div>
    </>
  )
}
