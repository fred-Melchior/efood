import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.red};
  width: 320px;
  margin: 0 auto;
  padding: 8px;
  color: ${cores.branco};

  p {
    font-size: 14px;
    padding: 8px 0;
  }
`
