import React from 'react';
import SkipComponent from './SkipComponent.js';  
import WrapComponent from './WrapComponent.js';
import MobileNavComponent from './MobileNavComponent.js';
import QuickMenuComponent from './QuickMenuComponent.js'; 
import GoTopComponent from './GoTopComponent.js'; 
import ValidatorComponent from './ValidatorComponent'; 


function App() {
    return (
        <React.Fragment>
            <SkipComponent/>
            <WrapComponent/>
            <MobileNavComponent/>
            <QuickMenuComponent/>
            <GoTopComponent/>
            <ValidatorComponent/>
        </React.Fragment>
    );
}

export default App;
