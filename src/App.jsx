import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CarPage from './pages/CarPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:brandId" element={<CarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

