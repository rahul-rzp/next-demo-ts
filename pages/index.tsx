import type { NextPage } from 'next'
// import { Button } from '@razorpay/blade/components'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'
import { useTheme, Theme, Button } from '@razorpay/blade/components'

const Home: NextPage = () => {
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setData(res))
  }, [])
  console.log(theme, "useTheme", theme.colors.brand.primary)
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
    {!data ? <div>Loading...</div> : (
      <>
      {data.map((item : any) => <Profile {...item} key={item.id}/>)}
      </>
    ) }
    </div>
  )
}

export default Home
