import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesContainer from './components/ArticlesContainer'
import UsersContainer from './components/UsersContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
      < Route path="/articles" element={<ArticlesContainer/>} />
      < Route path="/users" element={<UsersContainer/>} />
      {/* < Route path="/topics" element={</>} /> */}
      </Routes>
    </>
  )
}

export default App
