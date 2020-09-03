import React , { Component } from 'react';
import { Link } from 'react-scroll';
import '../css/Header.css';

class Header extends Component {
    render(){ 
        return(
            <div className="header">
                <p className="header--logo">
                    Deep Parekh 
                </p>
                
            
                <ul className="header--navbar">
                    <li className="header--navbar-item first-item">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            About
                        </Link>
                    </li>

                    <li className="header--navbar-item">
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}
                        >
                        Experience
                        </Link>
                    </li>
                    <li className="header--navbar-item">
                        <Link
                            activeClass="active"
                            to="Hobbies"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}
                        >
                        Hobbies
                        </Link>
                    </li>
                    <li className="header--navbar-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={900}
                        >
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;