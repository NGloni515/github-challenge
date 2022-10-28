import Head from 'next/head'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Select from '../components/Select'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="bg-white">
    <div className='pt-6'>
      <div className='md:grid md:grid-cols-4 md:gap-1'>
        <Breadcrumb></Breadcrumb>
        <div className='w-56'>
          <Select />
        </div>
      </div>
      
    </div>
  </div>
      
    </>
  
  
  )
}
