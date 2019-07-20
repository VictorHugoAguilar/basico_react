import React from 'react';


const Producto = ({producto}) => (
    <div>
        <h2>{producto.name}</h2>
        <h4>{producto.precio}</h4>
    </div>
)

export default Producto;