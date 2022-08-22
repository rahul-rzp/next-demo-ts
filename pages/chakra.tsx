import type { NextPage } from 'next'
import axios from 'axios'
import { Alert, AlertIcon, Button, extendTheme, Heading, Input, InputGroup, InputLeftElement, ChakraProvider, theme as baseTheme, withDefaultColorScheme } from '@chakra-ui/react';
import {PhoneIcon} from '@chakra-ui/icons'

import {  } from '@chakra-ui/react'
import { CButton } from './blade/Button';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      200: "#f7fafc",
      300: "#f7fafc",
      400: "#f7fafc",
      500: "#f7fafc",
      600: "#f7fafc",
      700: "#f7fafc",
      800: "#f7fafc",
      900: "#1a202c",
    },
  },
})

const customTheme = extendTheme(
  {
    colors: {
      brand: baseTheme.colors.red,
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: 'blue',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
)

const Home: NextPage = ({ data }: any) => {
  return (
    <ChakraProvider theme={customTheme}>
      <CButton>
        hii
      </CButton>
      <Button variant='solid'>
    Button11
  </Button>
  <Button variant='outline'>
    Button
  </Button>
  <Button variant='ghost'>
    Button
  </Button>
  <Button variant='link'>
    Button
  </Button>
   <Heading as='h1' size='4xl' noOfLines={1}>
    (4xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='3xl' noOfLines={1}>
    (3xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='2xl'>
    (2xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='xl'>
    (xl) In love with React & Next
  </Heading>
  <Heading as='h3' size='lg'>
    (lg) In love with React & Next
  </Heading>
  <Heading as='h4' size='md'>
    (md) In love with React & Next
  </Heading>
  <Heading as='h5' size='sm'>
    (sm) In love with React & Next
  </Heading>
  <Heading as='h6' size='xs'>
    (xs) In love with React & Next
  </Heading>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>

  <Alert status='success'>
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status='warning'>
    <AlertIcon />
    Seems your account is about expire, upgrade now
  </Alert>

  <Alert status='info'>
    <AlertIcon />
    Chakra is going live on August 30th. Get ready!
  </Alert>
  <br />
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>
    </ChakraProvider>
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
