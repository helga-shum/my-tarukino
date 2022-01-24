import React from 'react'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <div className="menu">
                <div className="container">
                    <nav className="menu__nav">

                        <Link to="/" className="menu__link">ГЛАВНАЯ</Link>
                        <Link to="/home" className="menu__link">ПРОДУКЦИЯ</Link>
                        <a href="#" className="menu__link">ОТЗЫВЫ</a>
                        <a href="#" className="menu__link">О ПРОИЗВОДСТВЕ</a>
                        <a href="#" className="menu__link">КОНТАКТЫ</a>
                        <a href="#" className="menu__link">О НАС</a>



                    </nav>

                </div>
            </div>

        </div>
    )
}

export default Menu
