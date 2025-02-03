import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    height: 14em;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 125px;
      margin-top: 40px;
    }
  }

  p {
    width: 540px;
    color: #e66767;
    font-size: 36px;
    font-weight: 900;
    margin-top: 128px;
    display: flex;
    justify-content: center;
    text-align: center;

    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 1.5em;
      font-size: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 1.5em;
      font-size: 16px;
    }
  }
`
