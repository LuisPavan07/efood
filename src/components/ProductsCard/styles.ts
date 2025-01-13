import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ProdutoCard = styled.div`
  background-color: ${cores.vermelha};
  width: 320px;
  height: 336px;
  padding: 8px;
  border-radius: 8px;

  img {
    width: 304px;
    height: 167px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    color: ${cores.footerBackgroundColor};
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0px;
  }

  p {
    color: ${cores.footerBackgroundColor};
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 21px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
    max-width: 100%;

    .container {
      max-width: 88%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 72%;
  }
`

export const ModalContent = styled.div`
  color: ${cores.branca};
  background-color: ${cores.vermelha};
  width: 1024px;
  height: 344px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  header {
    display: flex;
    justify-content: flex-end;

    img {
      width: 16px;
      height: 16px;
      margin: 8px;
      cursor: pointer;
    }
  }

  .product {
    display: flex;
    justify-content: space-between;
    margin: 0 32px;

    img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
    }

    h4 {
      font-size: 18px;
    }

    p {
      margin-top: 16px;
      line-height: 22px;
    }

    button {
      margin-top: 16px;
      width: 218px;
      height: 24px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;

    .product {
      align-items: center;
  }

  
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 88%;
    height: 600px;

    .product {
      max-height: 80%;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      margin: 0;

      img {
        width: 100%;
        height: auto;
        margin: 0;
      }

      h4 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        line-height: 16px;
      }

      button {
        width: 100%;
      }
  }
`

export const ModalOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
