import Head from 'next/head'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Select from '../components/Select'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="bg-white">
    <div className='pt-6  columns-4'>
      <Breadcrumb></Breadcrumb>
      <Select></Select>
    </div>
  </div>
      
    </>
  
  
  )
}
