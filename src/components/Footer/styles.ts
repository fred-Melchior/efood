import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.ocre};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const Redes = styled.ul`
  display: flex;
  margin-top: 32px;
  margin: 32px 0 80px 0;

  li {
    margin-right: 8px;
  }
`

export const Copy = styled.p`
  color: ${cores.red};
  font-size: 10px;
  text-align: center;
`
