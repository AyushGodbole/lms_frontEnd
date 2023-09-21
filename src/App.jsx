import './App.css'
import {Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
