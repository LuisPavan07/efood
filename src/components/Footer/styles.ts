import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  width: 100%;
  height: 300px;
  background-color: ${cores.footerBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${cores.vermelha};
    font-size: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
  }
`

export const Logo = styled.div`
  margin-top: 32px;
  margin-bottom: 200px;
  text-align: center;
  margin-bottom: 40px;
`

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;
  gap: 8px;
`
