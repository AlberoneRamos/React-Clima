import React from 'react';
import Nav from './Nav';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className="row">
                    <div className="medium-6 large-4 columns small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}