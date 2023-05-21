import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeroContainer = styled.div`
  height: 384px;
  max-width: 2040px;
  width: 100%;
  background-repeat: no-repeat;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    height: 57.5px;
    width: 125px;
  }
`

export const Title = styled.h1`
  color: ${cores.red};
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`
