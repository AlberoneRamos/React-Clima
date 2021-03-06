import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component{
    onSearch(e){
        e.preventDefault();
        var nomeCidade = e.target.cidadeInput.value;
        var encodedLocation = encodeURIComponent(nomeCidade);
        if(nomeCidade.length > 0){
            e.target.cidadeInput.value = '';
            window.location.hash = '#/?location='+encodedLocation;
        }
    }

    render(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">ReactClima</li>
                        <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</NavLink></li>
                        <li><NavLink exact to="/sobre" activeClassName="active"  activeStyle={{fontWeight:'bold'}}>Sobre</NavLink></li>
                        <li><NavLink exact to="/exemplos" activeClassName="active"  activeStyle={{fontWeight:'bold'}}>Exemplos</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                               <input type="search" placeholder="Procurar a temperatura" name="cidadeInput"/> 
                            </li>
                            <li>
                                <input type="submit" className="button" value="procurar!"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}