import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  padding: 56px 172px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
