import { Articulo } from "../Articulo";
import styles from './estilos'
import {Card} from './card'

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const lastadd=props.lastadd.current
    console.log(lastadd);
    return (
        <div style={styles.mdiv}>
          {lastadd?<Card texto={"Ultimo Agregado:"} prod={lastadd}/>:null}
            <div style={styles.div}>

                {
                    productos.map(prod => 
                        // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                        <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                    )
                }
            </div>
        </div>
    )
}