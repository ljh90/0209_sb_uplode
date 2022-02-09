import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';  // Header컴포넌트
import MainComponent from './MainComponent';  // Main컴포넌트
import FooterComponent from './FooterComponent';  // Footer컴포넌트

class WrapComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="wrap">
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>
                </div>
            </React.Fragment>
        );
    }
}

export default WrapComponent;