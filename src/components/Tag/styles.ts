import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.size === 'small' ? `${cores.red}` : `${cores.ocre}`};
  color: ${(props) =>
    props.size === 'small' ? `${cores.branco}` : `${cores.red}`};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding: 4px 6px;
  display: ${(props) => (props.size === 'small' ? 'inline-block' : 'block')};
`
