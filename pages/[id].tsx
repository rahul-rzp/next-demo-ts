import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'
import { useRouter } from 'next/router'
import axios from 'axios'

interface IUser {
  name: string,
  phone: string,
  username: string,
  website: string,
  id: number
}

type IdProps = IUser | null;

const Home: NextPage = () => {
  const [data, setData] = useState<IdProps>(null);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    callAPI();
  }, [id])
  
  const callAPI = async () => {
    if (id) {
      try {
        const response: any = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (response.ok) {
          const newData = await response.json();
          setData(newData);
        } else {
          throw new Error(response.status);
        }
      } catch (e: any) {
        setError(e.message);
        console.table(e);
      }
    }
  }
  console.log(data, id, router);
  if (error) {
    return (
      <div>{error}</div>
    )
  }
  return (
    <div className={styles.container}>
      {!data ? <div>Loading...</div> : (
        <>
          <Profile {...data} key={data.id}/>
        </>
      ) }
    </div>
  )
}

export default Home
