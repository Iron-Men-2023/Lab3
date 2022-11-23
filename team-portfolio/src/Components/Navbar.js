import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { ExternalLink } from 'react-external-link';

function Navbar(props) {
    const [click,setClick] = useState(false);


    return (
        <div className='navbar'>
            <div className='navbar-container container'>


                <ul className='nav-menu active'>
                    <li>
                        <Link to='/' className='nav-links'>
                            <h2>Home</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/joslin' className='nav-links'>
                            <h2>Joslin</h2>
                        </Link>
                    </li>
                    <li>
                        <ExternalLink href="https://aezouhri.github.io/" className='nav-links'>
                            <h2>Adnane</h2>
                        </ExternalLink>

                    </li>
                    <li>
                        <ExternalLink href="https://bdesollar.github.io/" className='nav-links'>
                            <h2>Ben</h2>
                        </ExternalLink>
                    </li>
                    <li>
                        <Link to='/Justin' className='nav-links'>
                            <h2>Justin</h2>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;