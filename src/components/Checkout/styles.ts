import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardForm = styled.form`
  max-width: 360px;
  padding: 32px 8px;

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

  p {
    color: ${cores.footerBackgroundColor};
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  .row-group {
    display: flex;
    justify-content: space-between;

    input {
      max-width: 155px;
      margin-right: 32px;

      @media (max-width: ${breakpoints.tablet}) {
        max-width: 136px;
      }
    }
  }
`

export const InputGroup = styled.div`
  label {
    color: ${cores.footerBackgroundColor};
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0;
    display: block;
  }

  input,
  select {
    background-color: ${cores.footerBackgroundColor};
    border: 1px solid ${cores.branca};
    width: 344px;
    height: 32px;

    &.error {
      border: 2px solid red;
      background-color: pink;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 304px;
    }
  }

  small {
    color: ${cores.branca};
  }
`
