import React from 'react'
import Typewriter from 'typewriter-effect'
import {  NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../css/home.css'
import FollowComp from '../FollowComp'
import BackVideo from '../BackVideo'

export default function Home() {
    return (
        <>
            <div className="container">
                <br />
                <span className="text-light display-3">I'm a</span><br />
                <span className="text-danger display-6">
                    <Typewriter 
                        options={{
                            strings: ['Front-End Engineer', 'React Developer', 'JavaScript Enthusiast', 'YouTuber'],
                            autoStart:true,
                            loop:true,
                        }}
                    />
                </span>
                    <br />
                    {/* <NavDropdown title="Resource Center" id="basic-nav-dropdown" style={{ width:'9rem' }}>
                        <NavDropdown.Item  href=""><Link to="/Projects" style={{ textDecoration:'none', backgroundColor:"#FFFFFF" }}>Projects</Link></NavDropdown.Item>
                        <NavDropdown.Item href=""></NavDropdown.Item>
                    </NavDropdown> */}

                    <Nav>
                        <Nav.Item>
                            <Nav.Link><Link to="/ResourceCenter" style={{ textDecoration:'none' }}>Resource Center</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                <br /><br />

                <FollowComp />     
                <div className="container">
                    <span>Buy me a coffee!</span>
                    <p className="text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est eligendi quaerat beatae mollitia, ab sunt adipisci. Assumenda tenetur numquam est dolor ipsam, error magni officia explicabo, ad quis reiciendis.
                        Fuga ipsa corporis fugit? E fugit. In modi, adipisci veritatis eligendi ut obcaecati deserunt iure illum ab necessitatibus. Quod ratione dolore nobis voluptas, ex perferendis pariatur!
                        Libero, ipsam! C eligendi iste asperiores facere quod ullam, ipsum, quibusdam deserunt, sed rem in? Eaque laborum amet non dicta libero?
                        Vero, optio consectetur modi eaque adipisci natus suscipit ipsa accusamus esse aliquid neque et in minus nemo possimus consequuntur praesentium magni, nesciunt nulla eos dolorum! Suscipit molestias ea quo nulla.
                        Veniam ratione atque architecto facilis in saepe, fugiat mollitia ad nemo aliquid sed rerum nostrum molestiae, dolorum possimus, cupiditate sapiente ipsum commodi quia incidunt voluptatem? Possimus labore voluptates quaerat ipsam!
                    </p>
                </div>

            </div>
        </>
    )
}
