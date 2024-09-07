import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainHeader({ children }) {
  const path = usePathname()

  return (
    <>
      <nav className='bg-emerald-500 w-full flex flex-row justify-between items-center py-6 px-8'>
        <div className='text-4xl text-white font-black'>
          <Link href='/'>Eventus</Link>
        </div>
        <Link
          className='text-2xl text-slate-200 hover:text-white hover:font-bold hover:transition-all'
          href='/events'>
          Browse All Events
        </Link>
      </nav>
      <main className='md:container mx-auto'>{children}</main>
    </>
  )
}
