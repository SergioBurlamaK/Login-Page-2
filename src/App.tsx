import { useState } from 'react'
import { login } from './login'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
    <form>
      { login() }
    </form>
    </>
  );
}

export default App
