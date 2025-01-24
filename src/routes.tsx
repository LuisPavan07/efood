import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './components/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
