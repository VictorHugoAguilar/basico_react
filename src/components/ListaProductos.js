import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {

   state = { 
       productos: [
            {id:1, name: 'Camisa ReactJS', precio:30},
            {id:2, name: 'Camisa Javascript', precio:45},
            {id:3, name: 'Camisa C#', precio:34}
    ]}

    // Una vez que se monta
    componentDidMount() {
        console.log(1);
    }

    // Antes que el componente que se monte
    componentWillMount() {
        console.log(2);
    }

    componentWillUpdate() {
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }
    
    render(){

        const {productos} = this.state;
        console.log(productos);
        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto => (
                    <Producto
                        key ={producto.id} 
                        producto={producto}
                    />
                ))}
            </Fragment>
        );
    }

}

export default ListaProductos