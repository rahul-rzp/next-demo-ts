import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'
import axios from 'axios'
import { Button } from '@razorpay/blade/components'

const Home: NextPage = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <Button
      iconPosition="left"
      onClick={function (){}}
      size="medium"
      type="button"
      variant="primary"
      >
      Pay Now
    </Button>
    <Button
      iconPosition="left"
      onClick={function (){}}
      size="medium"
      type="button"
      variant="secondary"
      >
      Pay Now
    </Button>
    <Button
      iconPosition="left"
      onClick={function (){}}
      size="medium"
      type="button"
      variant="tertiary"
      >
      Pay Now
    </Button>
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
