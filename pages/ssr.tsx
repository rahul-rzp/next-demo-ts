import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'
import axios from 'axios'

const Home: NextPage = ({ data }: any) => {
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

export async function getServerSideProps(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    props: {
      data: response.data
    }
  };
}

export default Home
