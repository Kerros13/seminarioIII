import { Button } from '../Button'
import { Article, ImgWrapperImg, ProductName, Price } from './styles'

export const Articulo = ({prod, agregarAlCarro}) => {
    return (
        <Article nombre={prod.nombre}>
            <ImgWrapperImg imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Article>
    )
}