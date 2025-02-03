import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  color: ${cores.branca};
  border: 1px solid ${cores.vermelha};
  background-color: ${cores.branca};

  > img {
    width: 100%;
    height: 216px;
    display: flex;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 8px 8px 16px 8px;

  .rate {
    font-size: 18px;
    font-weight: 700;
    color: ${cores.vermelha};
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: ${cores.vermelha};
`

export const Star = styled.img`
  width: 18px;
  height: 18px;
  border: none;
  margin-left: 4px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding: 8px;
  color: ${cores.vermelha};
`
