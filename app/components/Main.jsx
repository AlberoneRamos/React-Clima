import React from 'react';
import Nav from './Nav';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <h2>Componente Principal</h2>
                {this.props.children}
            </div>
        );
    }
}