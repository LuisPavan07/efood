import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Form = styled.form`
  max-width: 360px;
  padding: 32px 8px 0px 8px;
  background-color: ${cores.vermelha};

  h2 {
    color: ${cores.footerBackgroundColor};
    font-size: 16px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    font-size: 16px;
    margin-top: 8px;
  }
`

export const Row = styled.div`
  display: block;
  max-width: 344px;
  height: 100%;
  flex-direction: column;
  margin-bottom: 24px;

  .row-group {
    display: flex;
    justify-content: space-between;

    input {
      max-width: 155px;
      margin-right: 32px;
    }
  }
`

export const InputGroup = styled.div`
  label {
    color: ${cores.footerBackgroundColor};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.footerBackgroundColor};
    border: 1px solid ${cores.branca};
    width: 344px;
    height: 32px;
    margin-bottom: 8px;
  }
`
