import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'

const Home: NextPage = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setData(res))
  }, [])
  console.log(data)
  return (
    <div className={styles.container}>
      {!data ? <div>Loading...</div> : (
        <>
        {data.map((item : any) => <Profile {...item} key={item.id}/>)}
        </>
      ) }
    </div>
  )
}

export default Home
