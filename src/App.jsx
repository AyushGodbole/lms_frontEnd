import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import NotFound from './Pages/NotFound'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutUs />} />

          {/* if path not found */}
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
