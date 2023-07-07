import React, { useState } from 'react';
import { Button, Typography, styled } from '@mui/material';
import { AddCircleOutline, Done } from '@mui/icons-material';


function App() {
  const [ click, setClick ] = useState(0);

  const YellowButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.muiprimary.main,
    color: 'black',
    margin: 2,

    "&:hover": {
      backgroundColor: theme.palette.muiprimary.dark,
      color: 'white'
    },
  }));


  return (
    <>
      <Typography variant='h1' component='p'>Hello</Typography>
      <Button variant="text" color="muiprimary" size="small">Text</Button>
      <Button variant="contained" onClick={() => { setClick(prev => prev + 1) }}>Hooks</Button>
      <YellowButton>Text</YellowButton>
      <div>
        <Button startIcon={<AddCircleOutline />} variant='contained' color='info'>Add Post</Button>
        <Button startIcon={<Done />} variant='contained' color="success">Finish</Button>
      </div>
      <br />
      <p>You clicked contained buttons {click} times.</p>
    </>
  )
}

export default App
