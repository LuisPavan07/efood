import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 768px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 376px;
    justify-content: flex-end;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelha};
  z-index: 2;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    font-size: 16px;
  }

  .empty-cart {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;

    p {
      color: ${cores.branca};
      font-size: 16px;
      margin-bottom: 24px;
    }

    ${ButtonContainer} {
      font-size: 16px;
    }
`

export const CartItem = styled.li`
  width: 344px;
  height: 100px;
  background-color: ${cores.footerBackgroundColor};
  padding: 8px 8px 12px 8px;
  display: flex;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  color: ${cores.footerBackgroundColor};
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 40px 0 16px;
`
