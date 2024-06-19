import {Outlet} from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer'


function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
