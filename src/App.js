import React from 'react';
import {
  ThemeProvider,
  ColorModeProvider,
  ColorModeScript,
  CSSReset,
  ChakraProvider
} from '@chakra-ui/react';
import ThemeToggler from './components/ThemeToggler';
import LoginForm from './pages/LoginForm';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";




export default function App() {
  //have two different views depending on if you are signed in or not

  const[isSignedIn, setIsSignedIn] = React.useState(false);

  return (
    <ChakraProvider>
      <div className="main">
        <CSSReset />
        <ThemeToggler />
        <LoginForm />
      </div> 
      
    </ChakraProvider>
  );
}