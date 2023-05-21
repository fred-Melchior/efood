import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  height: 400px;
  border: 1px solid ${cores.red};
  background-color: ${cores.white};
  position: relative;
`

export const CardContainer = styled.div`
  padding: 8px;
  position: absolute;
`

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  color: ${cores.red};
  font-weight: bold;
  font-size: 18px;
`

export const Star = styled.div`
  display: flex;
  align-items: center;
`

export const Desc = styled.p`
  color: ${cores.red};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  width: inherit;
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  ${TagContainer} {
    margin-right: 8px;
  }
`
