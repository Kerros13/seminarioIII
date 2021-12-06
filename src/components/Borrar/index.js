import styles from './estilos'
import {Btn} from './styles'
export const Borrar = ({children, borrar, prod}) => {
    return (
        <Btn onClick={() => window.confirm("¿Desea quitar el articulo del carrito?")?borrar(prod):null} >{children}</Btn>
    )
}
