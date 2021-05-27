import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';


const app = document.getElementById('app')
//const holaMundo = <h1>hola eres la poco bano de quimbaya aliasssss manchas</h1>

// ReactDOM.render(que voy a renderizar 'elemento o componente, donde lo hare 'app');

render(<Media type="lo mejor" title=  "Las mejores Flores del Mercado" author= "Oscar Alvarez " image= "./images/covers/smiling-sunflower.jpg"/> , app);

// console.log('hola mundo')//
