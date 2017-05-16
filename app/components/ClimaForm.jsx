import React from 'react';

export default class ClimaForm extends React.Component{
    
    constructor(props){
        super(props);
    }

    submitHandler(e){
        e.preventDefault();
        var {NomeCidade,unidade} = e.target;
        if(NomeCidade.value.length > 0){
            this.props.handleSearch(NomeCidade.value,unidade.value);
            e.target.NomeCidade.value = '';
        }
    }
    
    render(){
        const submitHandler = this.submitHandler.bind(this);
        return(
            <form onSubmit={submitHandler}>
                <input type="text" name="NomeCidade"/>
                <select name="unidade">
                    <option value='°C'>Graus Celsius (°C)</option>
                    <option value='°F'>Graus Farenheit (°F)</option>
                    <option value='K'>Kelvin (K)</option>
                </select><br/>
                <button className="hollow button expanded ">Qual o clima?</button>
            </form>
        );
    }
}