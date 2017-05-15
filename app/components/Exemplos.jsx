import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Exemplos extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-center">Exemplos</h1>
                <p>Exemplos para testar:</p>
                <ol>
                    <li><NavLink exact to="/?location=belo%horizonte">Belo Horizonte, Brasil</NavLink></li>
                    <li><NavLink exact to="/?location=boston">Boston, Estados Unidos</NavLink></li>
                    <li><NavLink exact to="/?location=londres">Londres, Reino Unido</NavLink></li>
                    <li><NavLink exact to="/?location=buenos%aires">Buenos Aires, Argentina</NavLink></li>
                </ol>
            </div>
        );
    }
}