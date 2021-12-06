import { Carro } from '../Carro'
import styles from './estilos'
import { NavS } from './styles'
export const Navbar = ({ cantidad, productos, borrar }) => {
        return (
        <NavS style={styles.nav}>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} borrar={borrar} />
        </NavS>
    )
}