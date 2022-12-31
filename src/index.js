import React from 'react';
import ReactDOM from 'react-dom/client';
import {Greeting, UserCard} from './greeting';
import {Button} from './button';
import {TaskCard} from './task';
import { Saludar } from './saludar';
import { Formulario } from './form';
import { Post } from './post'
import {ArrayUse} from './arrays'
import {CounterUseState} from './hooks'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    {/*<UserCard name="Jose" amount={500} married={true} points={[100,120,130]} address={{street: "primavera 217", city: "abasolo"}}/>*/}
    {/*<Button text="HELLO"/>
    <Button text="FUCKING"/>
<Button text="WORLD" name="!!!"/>*/}
{/*<TaskCard bandera={true}/>
<Saludar/>
<Formulario/>*/}
{/*<Post/>*/}
{/*<ArrayUse/>*/}
<CounterUseState/>


</>)