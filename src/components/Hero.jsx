import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__title">
                        Гарантия <br /> минимальной цены <br /> и высокого качества <br /> на десерты
                    </h1>
                    <span className="hero__subtitle">
                        от 100 грн
                    </span>
                    <Link to='/home' >
                        <button className="button hero__button">

                            Заказать десерт
                        </button>
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default Hero
