import { styled } from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/images/fechar.png'
import { TagContainer } from '../Tag/styles'

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
  position: relative;
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

  .close {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background-image: url(${fechar});
    background-color: transparent;
    border: none;
  }

  ${TagContainer} {
    display: inline-block;
  }
`
