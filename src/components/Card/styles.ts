import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  color: ${cores.footerBackgroundColor};

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 376px;
    justify-content: flex-end;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  height: 100%;
  background-color: ${cores.vermelha};
  z-index: 3;
  margin: 0;
  padding: 0;

  h2 {
    color: ${cores.footerBackgroundColor};
    font-size: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 320px;
  }
`
