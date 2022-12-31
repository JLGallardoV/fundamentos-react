import './task.css';

export function TaskCard({bandera}) {
    return <div className="card">
        <h1 className= {bandera ? 'terminada' : 'cancelada'}> My first task</h1>
        <p style={{fontSize:'8px'}}>this is an example</p>
    </div>

}