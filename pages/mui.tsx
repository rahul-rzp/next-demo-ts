import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './components/Profile'
import axios from 'axios'
// import { Button } from '@razorpay/blade/components'
import { Alert, Button, InputAdornment, TextField, ThemeProvider, Typography } from '@mui/material'
import { createTheme, useTheme } from '@mui/material/styles';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import FourKIcon from '@mui/icons-material/FourK';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty'
import { AccountCircle } from '@mui/icons-material'

function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}


// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: any = createTheme({
  palette: {
    primary: {
      main: '#558728',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
// const theme2 = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

const Home: NextPage = ({ data }: any) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={themeOptions}>
    <div className={styles.container}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>
 <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br />
        <DeleteForeverTwoToneIcon />
        <DeleteForeverSharpIcon />
        <ThreeDRotationIcon />
        <FourKIcon />
        <ThreeSixtyIcon />
      {/* <Button
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
    </Button> */}
    </div>
</ThemeProvider>
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
