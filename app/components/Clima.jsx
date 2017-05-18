import React from 'react';
import ClimaForm from './ClimaForm';
import ClimaMessage from './ClimaMessage';
import openWeatherMap from '../API/openWeatherMap';
import ModalErro from './ModalErro';
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
            isLoading:true,
            mensagemErro: undefined
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
                isLoading:false,
                mensagemErro: errorMessage.message
            });
        });
    }
    
    

    render(){
        const state = this.state;
         function renderMessage(){
            if(state.isLoading){
                return <h3 className="text-center">Consultando...</h3>
            } else if(state.temperatura && state.cidade){
                return <ClimaMessage {...state}/>;
            }
        }

       function renderError(){
            if(typeof state.mensagemErro == 'string'){
                return(
                    <ModalErro mensagem={state.mensagemErro}/>
                )
            }
        }
        return(
            
            <div>
                <h1 className="text-center">Clima</h1>
                <ClimaForm handleSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
                {renderError()}
            </div>
            
        );
    }
}