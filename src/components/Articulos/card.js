import { Article, ImgWrapperImg, ProductName, Price } from './styles'

export const Card = ({prod, texto}) => {
    return (
        <Article nombre={prod.nombre}>
            <div>{texto}</div>
            <ImgWrapperImg imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
        </Article>
    )
}