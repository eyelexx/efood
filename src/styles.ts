import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  salmon: '#E66767',
  pureWhire: '#fff',
  white: '#FFF8F2',
  antiqueWhite: '#FFEBD9',
  salmaoOpaco: '#E667670D'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.salmon};
  }
`
export const DefaultContainer = styled.div`
  max-width: 1024px;
  margin: 0px auto;
  width: 100%;
`
