import React from 'react'

function Offer() {
    return (
        <div>
            <section id="offer" className="offer">
                <div className="container">
                    <div className="offer__block offer-block offer-block_price-bg">
                        <h2 className="offer__title">
                            Ищите где дешевле и лучше?
                        </h2>
                        <span className="offer__subtitle">
                            Обращайтксь к нам
                        </span>
                        <form action="#" className="form offer__form">
                            <div className="form__row">
                                <div className="form__group">
                                    <input type="text" className="input form__input" placeholder="Ваше имя" />
                                </div>
                                <div className="form__group">
                                    <input type="text" className="input form__input" placeholder="Ваш телефон" />
                                </div>
                                <div className="form__group">
                                    <input type="text" className="input form__input" placeholder="Ваша цена" />
                                </div>
                            </div>

                            <div className="form__row">

                                <div className="form__group">
                                    <input type="submit" className="button form__button form__button-price" value="Получить расчет со скидкой" />
                                </div>
                                <div className="form__group">
                                    <span className="form__policy">
                                        Ваши данные надежно защищенны
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Offer
