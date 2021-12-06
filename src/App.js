import { Fragment, useState, useEffect, useRef, createContext, useContext } from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import {Card} from './components/Articulos/card'


// base de datos
const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
  ],
  carrito: [
    //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
  ]
}
var item = informacion[Math.floor(Math.random()*informacion.length)];
console.log(item)
export const random = createContext(<Card texto={"Objeto del dia:"} prod={item}/>); //Context

function App() {
  const [data, setData] = useState(informacion)
  const lastadd = useRef()
  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      lastadd.current=producto;
      setData({...data})
      return
    }
    lastadd.current=producto;
    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  const borrar = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      data.carrito.forEach((x,index) =>{   
        if( x.id === producto.id ){
          data.carrito.splice(index,1);
        }
      })
      setData({...data})
    }
  }
  
  
  // App > Navbar > Carro > Burbuja > Numero de productos
  let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
  
  useEffect(() => {
    if (cantidad > 0)
      document.title= `React +${cantidad}`
    else
      document.title = "React App"
  }, [data]);
    
  
  return (
    <random.Provider>
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito}  borrar={borrar}  />
        <Articulos agregarAlCarro={agregarAlCarro} data={data} lastadd={lastadd} />
      </Fragment>
    </random.Provider>
  );
}

export default App;
