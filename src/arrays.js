export const ArrayUse = ()=>{
    const users = [
        {
            id: 1,
            name: 'Mark',
            image: 'https://robohash.org/user1'
        },
        {
            id: 2,
            name: 'Joe',
            image: 'https://robohash.org/user2'
        },
        {
            id: 3,
            name: 'Wilson',
            image: 'https://robohash.org/user3'
        }
    ];
    //primer parametro representa el elemento del array el segundo elemento del map es el indice del recorrido
    return users.map((user,i)=> 
    <div key={i}>
        <h1>{user.name}</h1>
        <img src={user.image}/>
        </div>
    );
}