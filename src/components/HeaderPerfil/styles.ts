import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.div`
  width: 100%;
  heigth: 286px;
  padding: 64px 172px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Links = styled.ul`
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.vermelha};
  }

  img {
    margin-left: 100px;
  }
`
