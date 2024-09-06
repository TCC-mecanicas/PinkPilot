import {Outlet} from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer'
import PinkIcon from './Componentes/PinkIcon/PinkIcons'


function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <PinkIcon/>
    <Footer/>
    </>
  )
}

export default App
