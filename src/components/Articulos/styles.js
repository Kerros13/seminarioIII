import styled, { css } from 'styled-components'

export const Article = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    text-align: center;
    width: 150px;
    position: fixed;
    background-color: white;
`

export const ImgWrapperImg = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 100px;
    ${props => css`
        background-image: url(${props.imagen})
    `}
`

export const ProductName = styled.h4`
    font-size: 12pt;
    margin-bottom: 0;
`


