import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUpPage'
import Login from './Pages/LoginPage'
import CourseList from './Courses/CourseList'
import ContactUs from './Pages/ContactUs'
import Denied from './Pages/Denied'
import CourseDescription from './Courses/CourseDescription'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutUs />} />

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route path='/courses' element={<CourseList />} />
          <Route path='/course/description' element={<CourseDescription />} />

          <Route path='/contact' element={<ContactUs />} />

          <Route path='/denied' element={<Denied />} />

          {/* if path not found */}
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
