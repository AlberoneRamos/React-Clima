import React from 'react';

export default class ClimaMessage extends React.Component{
    
    render(){
        const {cidade,temperatura,unidade} = this.props;
        return(
            <h3 className="text-center">A temperatura em {cidade} é de {temperatura} {unidade}</h3>
        );
    }
}