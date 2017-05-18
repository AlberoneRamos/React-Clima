import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import React from 'react';
import ReactDOM from 'react-dom';
import Clima from './components/Clima';
import Sobre from './components/Sobre';
import Exemplos from './components/Exemplos';
import styles from  'foundation-sites/dist/css/foundation.css';
import './styles/app.css';
$(document).foundation();


ReactDOM.render(
    <HashRouter>
        <Main>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/" component={Clima}/>
            <Route exact path="/exemplos" component={Exemplos}/>
        </Main>
    </HashRouter>,
    document.getElementById('app')
);