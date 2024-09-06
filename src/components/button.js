import Link from 'next/link'

export default function Button({ link, onClick, children }) {
  if (link) {
    return (
      <Link
        className='py-2 px-4 bg-emerald-500 rounded-lg text-white font-medium'
        href={link}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className='py-2 px-4 bg-emerald-500 rounded-lg text-white font-medium'
      onClick={onClick}>
      {children}
    </button>
  )
}
