import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  max-width: 2040px;
  width: 100%;
`

export const EfoodDiv = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.red};
  padding: 60px 170px;
`

export const Reastaurante = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 280px;
  color: ${cores.branco};
  font-size: 32px;
  padding: 16px 170px;

  h2 {
    font-weight: 100;
    margin-bottom: 80px;
  }

  h1 {
    font-weight: bold;
  }
`
