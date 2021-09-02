import React from 'react';
import { Button } from 'react-bootstrap';
import './NoMatch.css';
const NoMatch = () => {
    return (
        <div className="nomatch">
            <div className="nomatch-style">
                <h2>Nothing Found</h2>
                <h2>4 &#11093; 4 Error</h2>
                <a href="/"><Button variant="dark">Back To Home</Button></a>
            </div>
        </div>
    );
};

export default NoMatch;