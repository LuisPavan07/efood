import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.vermelha};
  background-color: ${cores.footerBackgroundColor};
  border: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.vermelha};
  color: ${cores.footerBackgroundColor};
  border: none;
  text-decoration: none;
`
