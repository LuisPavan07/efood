import * as S from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => {
  return (
    <S.CardContainer>
      <S.Overlay />
      <S.Sidebar>
        <div>{children}</div>
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Card
