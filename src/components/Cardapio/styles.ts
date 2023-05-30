import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Lista = styled.ul`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 24px auto 88px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
`

export const ModalDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  color: ${cores.branco};
  background-color: ${cores.red};

  p {
    margin: 16px 0;
  }

  > img {
    margin-right: 24px;
    width: 280px;
    height: 280px;
  }

  ${TagContainer} {
    display: inline-block;
  }
`
