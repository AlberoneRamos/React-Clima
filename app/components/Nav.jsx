import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <h2>Barra de navegação</h2>
                <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</NavLink>
                <NavLink exact to="/sobre" activeClassName="active"  activeStyle={{fontWeight:'bold'}}>Sobre</NavLink>
                <NavLink exact to="/exemplos" activeClassName="active"  activeStyle={{fontWeight:'bold'}}>Exemplos</NavLink>
            </div>
        );
    }
}