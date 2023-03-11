import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, } from 'reactstrap';
import classnames from 'classnames';
import './Authentication.css';

const Authentication = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Row><h1>&nbsp;</h1></Row>
            {/* <div style={{ textAlign: 'center', marginBottom: '5%'}} ><h1 >SALTY THINGS</h1></div> */}
            <Nav tabs >
                <NavItem style={{width: "50%"}}>
                    <NavLink 
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem style={{width: "50%"}}>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Register
                    </NavLink>
                </NavItem>
                
                
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <div classname='jumbotron' style={{backgroundImage: 'linear-gradient(#04519b, #033C73 60%, #02325f)'}}>
                            <Login />
                        </div>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <div classname='jumbotron' style={{backgroundImage: 'linear-gradient(#6d94bf, #446E9B 50%, #3e648d)'}}>
                            <Register />
                        </div>
                    </Col>
                </Row>
                </TabPane>
                
                
            </TabContent>
        </div>
    );
}
    
export default Authentication