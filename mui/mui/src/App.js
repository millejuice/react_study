import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header(){
  return(
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav(){
  return (
    <ol>
      <li>Html</li>
      <br />
      <li>CSS</li>
    </ol>
  );
}


function Article(){
  const [open,setOpen] = React.useState(false);
  return(
    <article>
      <h2>Welcome</h2>
      Hello Web!
      <br />
      <ButtonGroup variant="contained" >
      <DialogActions onClick={
        ()=>setOpen(true)
      }> <Button>Create</Button>  </DialogActions>
      <Button>Update</Button>
      </ButtonGroup>
      <Button>Delete</Button>
      <Dialog open={open}>
        <DialogActions onClick={
          ()=>setOpen(false)
        }>
          Close
        </DialogActions>
      </Dialog>
    </article>
  );
}

function App() {
  return (
    <Container>
      <Header />
      <Nav />
      <Article />
    </Container>
  );
}

export default App;
