import React from 'react';
import PropTypes from 'prop-types';

export default class ModalErro extends React.Component{
    
    constructor(props){
        super(props);
    }


    componentDidMount(){
        var Modal = new Foundation.Reveal($('#modal-erro'));
        Modal.open();
    }

    render(){
        var {titulo, mensagem} = this.props;
        return(
            <div className="reveal tiny text-center" id="modal-erro" data-reveal="">
                <h1>{titulo}</h1>
                <p className="lead">{mensagem}</p>
                <button className="close-button" data-close="" aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

ModalErro.propTypes = {
    titulo: React.PropTypes.string,
    mensagem: React.PropTypes.string.isRequired
}

ModalErro.defaultProps = {
    titulo: 'Erro'
}
