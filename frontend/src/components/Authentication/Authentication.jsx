import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import classnames from 'classnames';
import './Authentication.css';

const Authentication = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="row"><h1>&nbsp;</h1></div>
            
            <div className="nav nav-tabs" >
                <div className="nav-item" style={{width: "50%"}}>
                    <Link 
                        to="/login"
                
                    >
                        Login
                    </Link>
                </div>
                <div className="nav-item" style={{width: "50%"}}>
                    <Link
                        to="/register"
                        
                    >
                        Register
                    </Link>
                </div>
                
                
            </div>
            
        </div>
    );
}
    
export default Authentication