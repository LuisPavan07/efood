import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Header = styled.div`
  width: 100%;
  heigth: 286px;
  padding: 64px 164px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 32px 8px;
    height: 140px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 50%;
    padding: 10px 10px;
  }
`

export const Links = styled.ul`
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.vermelha};
    cursor: pointer;
  }

  img {
    margin-left: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;

    img {
      max-width: 280px;
      margin: 0 8px;
      padding: 0 8px;
    }
  }
`
