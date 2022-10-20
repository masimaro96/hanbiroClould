import './App.css';
import React from 'react';
import { Button, ButtonToolbar, ButtonGroup } from '@/shared/components/Button';
/* eslint-disable */

function App() {
  
  return (
    <div className='App'>
    
    <ButtonToolbar>
        <ButtonGroup icons dir="ltr">
            <Button variant="outline-secondary"><span className="lnr lnr-pushpin" /></Button>
            <Button variant="outline-secondary"><span className="lnr lnr-heart-pulse" /></Button>
            <Button variant="outline-secondary"><span className="lnr lnr-cog" /></Button>
            <Button variant="outline-secondary"><span className="lnr lnr-magic-wand" /></Button>
        </ButtonGroup>
    </ButtonToolbar>
    </div>
  );
}

export default App;