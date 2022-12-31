export function Greeting(props){
    console.log(props);
    return <h1>{`hello ${props.title}`}</h1>;
}

export function UserCard({name, amount, married, points, address}){
    return <div>
        <h1>Name: {name}</h1>
        <br/>
        <label>Amount: {amount}</label>
        <br/>
        <label>Estatus: {married === true ? "married":"single"}</label>
        <br/>
        <label>Points: {points}</label>
        <br/>
        <ul>
            <li>street: {address.street}</li>
            <li>city: {address.city}</li>
        </ul>

    </div>
}