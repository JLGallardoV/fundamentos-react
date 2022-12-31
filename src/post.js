import {VscBug} from 'react-icons/vsc';

export const Post = ()=>{
    return <button onClick={async () => {
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(await respuesta.json());
        } catch (error) {
            console.error(error);
        }
        /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));*/
        
    }}>
        <VscBug/>
        Recibir
    </button>
}