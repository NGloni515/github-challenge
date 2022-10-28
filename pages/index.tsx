import Head from 'next/head'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Select from '../components/Select'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="h-screen bg-white">
    <div className='pt-6'>
      <div className='md:grid md:grid-cols-4 md:gap-1'>
        <Breadcrumb></Breadcrumb>
        <div className='w-56'>
          <Select />
        </div>
      </div>
      <div className='p-10'>
        <div className='bg-gray overflow-auto rounded-lg shadow'>
        <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Comment </th>
            <th className='w-60 p-3 text-sm font-semibold tracking-wide text-left'>Authored</th>
            <th className='w-60 p-3 text-sm font-semibold tracking-wide text-left'>Commited By</th>
            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>URL</th>
            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Hash</th>
          </tr>
        </thead>
          <tbody className='divide-y divide-gray-100'>
            <tr className='bg-white'>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>init commit</td>
              <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'> Angeloni Cuesta</td>
              <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'> Angeloni Cuesta</td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'> today</td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'><a href='#' className='text-blue-500 hover:underline' >url</a> </td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'> 1234wsafg32</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>init commit</td>
              <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'> Angeloni Cuesta</td>
              <td className='w-60 p-3 text-sm text-gray-700 whitespace-nowrap'> Angeloni Cuesta</td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'> today</td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'><a href='#' className='text-blue-500 hover:underline' >url</a> </td>
              <td className='w-32 p-3 text-sm text-gray-700 whitespace-nowrap'> 1234wsafg32</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
      
    </>
  
  
  )
}
