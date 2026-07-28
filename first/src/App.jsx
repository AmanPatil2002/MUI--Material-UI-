import './App.css'
import AutoComplete from './components/AutoComplete'
import Buttons from './components/Buttons'
import UploadFile from './components/UploadFile'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import ThemeSwitch from './components/ThemeSwitch';
import { useState } from 'react';

function App() {

  const [lightMode,setlightMode] = useState(true);

  const theme = createTheme({
  palette: {
    
    primary:{
      main: '#D32F2F',
    },
    mode: lightMode ? 'light' : 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/> 
        <Navbar/>
        <Buttons/>
        <UploadFile/>
        <AutoComplete/>
        <ThemeSwitch lightMode={lightMode} setlightMode={setlightMode}/>
      </ThemeProvider>
    </>
  )
}

export default App