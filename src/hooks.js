import { useEffect, useState } from "react"

//el hook useState nos ayudara a cambiar el estado de una variable o propiedad de la app (react no es tan reactivo como angular, en angular las vaiables cambian de valor automaticamente con el binding nativo)
export function CounterUseState(){
    /*declaracion de una variable ligada a un estado, el useState contiene 2 parametros (como si fuera un arreglo con 2 posiciones),
    el primero será el nombre de la variable en uso  y el segundo es una funcion que internamente tiene la 
    finalidad de almacenar el estado de la variable (de la primer posicion); el parametro de useState(parametro) es opcional y es el equivalente a dar 
    inicialización al estado de la variable (es el estado inicial de la variable)
    */
    const [mensaje, setMensaje] = useState(''); 
    const [counter, setCounter] = useState(0);

    /* 
    es una funcion que se ejecuta al cargar el componente y tambien si asi se decide que se ejecute cuando hay algun cambio de estado en alguno de los elementos del componente
    */
    useEffect(()=> {
        console.log("execute")
    },[counter]); //si como segundo parametro solo dejo [], la instruccion solo se ejecuta una vez al cargar el componente; pero en este ejemplo estoy especificando que se ejecute cada que cambie de estado la variable counter
    return(
        <div>
            <input onChange={e => setMensaje(e.target.value)}/>
            <button onClick={() =>  alert("este es el estado guardado: " + mensaje)}>Ejecutar</button>

            <hr/>

            <h1>Counter {counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>Incrementar</button>

        </div>
    )
}