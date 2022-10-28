import Head from 'next/head'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Select from '../components/Select'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="h-screen bg-white">
    <div className='pt-6'>
      <div className='md:grid md:grid-cols-4 md:gap-1'>
        <Breadcrumb />
        <div className='w-56'>
          <Select />
        </div>
      </div>
      <div className='p-10'>
        <Table />
      </div>
    </div>
  </div>
      
    </>
  
  
  )
}
