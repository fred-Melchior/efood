import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  cursor?: 'y' | 'n'
  children?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Tag = ({ children, size, onClick, type }: Props) => (
  <TagContainer size={size} onClick={onClick} type={type}>
    {children}
  </TagContainer>
)

export default Tag
