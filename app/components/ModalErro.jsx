import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class ModalErro extends React.Component{
    
    constructor(props){
        super(props);
    }


    componentDidMount(){
        var {titulo, mensagem} = this.props;
        var modalMarkup = (
            <div className="reveal tiny text-center" id="modal-erro" data-reveal="">
                <h1>{titulo}</h1>
                <p className="lead">{mensagem}</p>
                <button className="close-button" data-close="" aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var Modal = new Foundation.Reveal($('#modal-erro'));
        Modal.open();
    }

    render(){
        return(
            <div></div>
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
