import {Outlet} from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header/Header'



function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
