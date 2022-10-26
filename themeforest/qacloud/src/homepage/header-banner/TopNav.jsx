
import React , { useState } from "react";
import './style.css';
// import './App.css';
import TopNavButton from './TopNavButton'
import TopNavSlotholder from './TopNavSlotholder'


function App(){
    return(
        <>
            <div >
                <TopNavButton />
            </div>
            <div >
                <TopNavSlotholder />
            </div>
           
        </>
        
    
    );
}

export default App;