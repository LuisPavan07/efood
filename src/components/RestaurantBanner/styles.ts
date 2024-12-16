import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  display: block;
  position: relative;
  color: ${cores.branca};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  p {
    padding: 24px 0px 156px 0px;
    font-size: 32px;
  }

  h2 {
    position: absolute;
    z-index: 2;
    font-size: 32px;
    font-weight: 900;
    line-height: 36px;
  }
`
