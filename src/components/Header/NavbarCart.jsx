import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Menu from './Menu';

function NavbarCart() {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const menuRef = React.useRef()

    const toogleMenu = () => {
        setVisibleMenu(!visibleMenu)
    }
    const handleOutsideClick = (e) => {
        if (!e.path.includes(menuRef.current)) {
            setVisibleMenu(false)

        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);


    }, [])



    const { totalPrice, totalCount } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-wrap">
                    <button ref={menuRef} className="menu-button navbar__menu-button" onClick={toogleMenu}>
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                    </button>
                    <div className="logo navbar__logo">
                        <strong className="logo__text">tarukino</strong>
                        <span className="logo__description">
                            ведущий производитель десертов в городе
                        </span>
                    </div>
                    <div className="navbar__contacts">
                        <div className="navbar__mobile">
                            <a className="navbar__phone" href="tel:+380688780194">+380688780194</a>
                            <span className="navbar__work-time navbar__small-text">без выходных 9-21</span>
                        </div>
                        <div className="navbar__landline">
                            <a className="navbar__email" href="#">tarukino_kh@gmail.com</a>
                            <a href="mailto:incertus.helga@gmail.com" className="navbar__email navbar__small-text">shumilova</a>
                        </div>
                    </div>
                    <Link to="/cart">
                        <button className="button button__cart">
                            <span>{totalPrice}$</span>
                            <div className="button__delimiter"></div>
                            <img className="button__img" src="./img/cart/shopping-cart.png" alt="cart" />
                            <span>{totalCount}</span>
                        </button>
                    </Link>
                    {visibleMenu && (<div className="menu__elem">
                        <Menu />
                    </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default NavbarCart
