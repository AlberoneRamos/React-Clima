import React from 'react';
import ClimaForm from './ClimaForm';
import ClimaMessage from './ClimaMessage';
import openWeatherMap from '../API/openWeatherMap';

export default class Clima extends React.Component{
    constructor(props){
        super();
        this.state = {
            isLoading:false
        };
    }

    handleSearch(NomeCidade,unidade){
        var self = this;
        self.setState({
            isLoading:true
        });
        openWeatherMap.getTemperatura(NomeCidade,unidade).then((temperatura) => {
            self.setState({
                cidade: NomeCidade,
                temperatura: temperatura,
                unidade: unidade,
                isLoading:false
            });
        },(errorMessage) => {
            self.setState({
                isLoading:false
            });
            alert(errorMessage);
        });
    }

    render(){
        const state = this.state;
         function renderMessage(){
            if(state.isLoading){
                return <h3>Consultando...</h3>
            } else if(state.temperatura && state.cidade){
                return <ClimaMessage {...state}/>;
            }
        }

        return(
            
            <div>
                <h3>Clima</h3>
                <ClimaForm handleSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
            </div>
            
        );
    }
}