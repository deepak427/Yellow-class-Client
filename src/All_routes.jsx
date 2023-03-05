import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contacts from './pages/Contacts/Contacts'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacts/:id" element={<Contacts/>} />
    </Routes>
  )
}

export default All_routes
