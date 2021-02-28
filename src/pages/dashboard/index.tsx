import { NextPage } from 'next'
import * as C from '~/components'
import * as S from '~/styles/pages/dashboard'

const Dashboard: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Finance Dashboard" />
      <S.Header>
        <S.Title>Finance Dashboard</S.Title>
      </S.Header>
      <S.ToolBar>
        <S.Title>ToolBar</S.Title>
      </S.ToolBar>
      <S.TopNav>
        <S.Title>TopNav</S.Title>
      </S.TopNav>
      <S.SideNav>
        <S.Title>SideNav</S.Title>
      </S.SideNav>
      <S.Content>
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
        <C.StyledCard />
      </S.Content>
      <S.Footer>
        <S.Title>Footer</S.Title>
      </S.Footer>
    </S.Container>
  )
}

export default Dashboard
