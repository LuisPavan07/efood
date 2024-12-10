import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;

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
    margin-top: 168px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`
