import React from 'react';
import Hero from '../Hero';

import NavbarCart from './NavbarCart';



function Header() {
    return (
        <div>
            <div className="header">
                <NavbarCart />
                <Hero />
            </div>
        </div>

    )
}

export default Header
