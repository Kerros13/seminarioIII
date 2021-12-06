import styles from './estilos'
import {Btn} from './styles'
export const Borrar = ({children, borrar, prod}) => {
    return (
        <Btn onClick={() => window.confirm("¿Borrar el articulo?")?borrar(prod):null} >{children}</Btn>
    )
}
