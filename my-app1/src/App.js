import './App.css';
import Navbar from './Components/Header/Navbar';
import Card from './Components/Main/Card';
import User from './Components/API/Users';
import TextBox from './Components/textBox/TextBox';
import Users from './Components/Users/Users';
import { Pagination } from './Components/Pagination/Pagination';
import Github from './Components/GithubProject/Home';
import { A } from './Components/Context/A';
import { useState } from 'react';
import { Login } from './Components/Context/Login';
import { Home } from './Components/Context/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { ContextProvider } from './Components/Context/myContext';

function App(){
  const [isLogin, setIsLogin ] = useState(true)
  return (
    <>
      <ChakraProvider>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <ContextProvider>
          <Github />
        </ContextProvider>
      </ChakraProvider>
    </>
    )
}

export default App;
