import { styled } from 'styled-components'
import { cores } from '../../styles'
import excluir from '../../assets/images/lixo.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  z-index: 1;
  width: 360px;
  padding: 32px 8px 0;
  background-color: ${cores.red};
`

export const CartItem = styled.div`
  position: relative;
  background-color: ${cores.ocre};
  color: ${cores.red};
  display: flex;
  padding: 8px;

  .img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${excluir});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Valor = styled.div`
  color: ${cores.ocre};
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
`
