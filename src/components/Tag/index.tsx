import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  cursor?: 'y' | 'n'
  children?: string
  onClick?: () => void
}

const Tag = ({ children, size, onClick }: Props) => (
  <TagContainer size={size} onClick={onClick}>
    {children}
  </TagContainer>
)

export default Tag
