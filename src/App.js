import React, { fragment } from "react";
import "./App.css";

function App() {
    // Añadimos variables

    const empleado = {
        nombre: "Victor",
        trabajo: "Desarrollo de app"
    };

    return (
        // Siempre hay que encapsular todo en un solo elemento por ejemplo
        //<div>
        //  <h1>{empleado.nombre}</h1>
        //  <h2>{empleado.trabajo}</h2>
        //</div>

        // la alternativa es fragment que es un contenedor de elemetos
        <fragment>
            <h1>{empleado.nombre}</h1>
            <h2>{empleado.trabajo}</h2>
        </fragment>
    );
}

export default App;
