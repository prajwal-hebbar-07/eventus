import { useRef } from 'react'
import Button from './button'

export default function FilterForm() {
  return (
    <form className='bg-gradient-to-r from-white to-fuchsia-100/50 py-6 px-8 rounded-xl flex flex-row justify-around items-center shadow-lg'>
      <label htmlFor='year' className='text-xl font-bold text-emerald-500'>
        Year -
      </label>
      <select id='year' className='bg-emerald-400/25 px-8 py-1 rounded-md mx-2'>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
      <label
        htmlFor='month'
        className='text-xl font-bold text-emerald-500 ms-4'>
        Month -
      </label>
      <select
        id='month'
        className='bg-emerald-400/25 px-8 py-1 rounded-md mx-2'>
        <option value='1'>Jan</option>
        <option value='2'>Feb</option>
        <option value='3'>Mar</option>
        <option value='4'>Apr</option>
        <option value='5'>May</option>
        <option value='6'>Jun</option>
        <option value='7'>Jul</option>
        <option value='8'>Aug</option>
        <option value='9'>Sept</option>
        <option value='10'>Oct</option>
        <option value='11'>Nov</option>
        <option value='12'>Dec</option>
      </select>
      <div className='ms-4'>
        <Button>Filter Events</Button>
      </div>
    </form>
  )
}
