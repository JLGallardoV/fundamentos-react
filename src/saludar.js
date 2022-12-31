// otra manera de crear componentes mediante clases, manera no tan actual, paradigma viejo en react, aqui se usa un poco mas las funciones
import { Component } from "react";

export class Saludar extends Component {
    render(){
        return <h1>componente creado con clases</h1>
    }
}