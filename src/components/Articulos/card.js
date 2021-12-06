import { Article, ImgWrapperImg, ProductName, Price } from './styles'

export const Card = ({prod}) => {
    return (
        <Article nombre={prod.nombre}>
            <div>Ultimo Agregado:</div>
            <ImgWrapperImg imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
        </Article>
    )
}