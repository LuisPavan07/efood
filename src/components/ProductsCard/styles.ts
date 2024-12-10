import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutoCard = styled.div`
  background-color: ${cores.vermelha};
  width: 320px;
  height: 336px;
  padding: 8px;

  img {
    display: block;
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
