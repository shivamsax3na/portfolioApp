import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  About from './pages/About';
import  Contact from './pages/Contact';
import  Projects from './pages/Projects';
import  ErrorNotFound from './pages/ErrorNotFound';
import  Home from './pages/Home';
import ResourceCenter from './pages/ResourceCenter';
import { Navbar, Nav } from 'react-bootstrap'
import '../css/header.css'

function Header() {
    return (
        <div
            style={{
                backgroundColor: '#000000'
            }}
            >
            <Router>
                <Navbar 
                    className="justify-content-center p-2" 
                    sticky="top"
                    style={{
                        
                        boxShadow: '0px 0px 18px #D3D3D3'
                    }}>
                    <Nav.Item>
                        <Nav.Link href="/home"><Link to="/" className="mediaLinks">Home</Link></Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link ><Link className="mediaLinks" to="/About"  >About</Link></Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link><Link className="mediaLinks" to="/Contact" >Contact</Link></Nav.Link>    
                    </Nav.Item>
                    
                </Navbar>
            
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>


                <Route path="/About">
                    <About />
                </Route>

                <Route path="/portfolioApp">
                    <Home />
                </Route>

                <Route  path="/Projects">
                    <Projects />
                </Route>

                <Route  path="/Contact">
                    <Contact />
                </Route>

                <Route  path="/ResourceCenter">
                    <ResourceCenter />
                </Route>

                <Route  path="*">
                    <ErrorNotFound />
                </Route>
            </Switch>

            </Router>
        </div>
    )
}

export default Header
