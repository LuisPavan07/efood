import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import BannerPerfil from '../../assets/images/Banner_perfil.svg'
import { Header, Links } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header style={{ backgroundImage: `url(${BannerPerfil})` }}>
      <nav>
        <div className="container">
          <Links>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
            <li>
              <img src={logo} alt="efood" />
            </li>
            <li>
              <a onClick={openCart}>{items.length} - produto(s) no carrinho</a>
            </li>
          </Links>
        </div>
      </nav>
    </Header>
  )
}

export default HeaderPerfil
