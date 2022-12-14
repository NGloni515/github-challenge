import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Select from '../components/Select'
import Table from '../components/Table'
import { getHomeData } from '../requests';

export default function Home() {
  const [currentBranch, setCurrentBranch] = useState({name: 'main'})
  const [repository, setRepository] = useState({})
  const [branches, setBranches] = useState([])
  const [commits, setCommits] = useState([])
  

  useEffect(() => {
    const setFetchData = async() => {
        const {repository, branches, commits} :any = await getHomeData(currentBranch.name);
        if(repository){
          setRepository(repository)
          setBranches(branches)
          setCommits(commits)
        }
    }
    setFetchData();
}, []);

  const onSelectBranch = async (newCurrentBranch: string) => {
    setCurrentBranch({name: newCurrentBranch})
    const {commits} :any = await getHomeData(newCurrentBranch);
    setCommits(commits)
  }

  return (
    <>
    <div className="h-screen bg-white">
    <div className='pt-6'>
      <div className='md:grid md:grid-cols-4 md:gap-1'>
        <Breadcrumb repository={repository} />
        <div className='w-56'>
          <Select branches={branches} onSelectBranch={onSelectBranch} />
        </div>
      </div>
      <div className='p-10'>
        <Table commits={commits} />
      </div>
    </div>
  </div>
      
    </>
  
  
  )
}
