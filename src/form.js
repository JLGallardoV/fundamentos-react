export function Formulario(){
    return <form onSubmit={(e)=>{
        e.preventDefault(); //quitamos el comportamiento de recarga de pagina del submit del form
        console.log("formulario enviado");
    }}>
        <h1>Mi primer formulario</h1>
        <button>Send</button>
    </form>
}