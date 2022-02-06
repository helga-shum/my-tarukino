import React from 'react'

function Offer() {
    return (
        <div>
            <section className="offer">
                <div className="container">
                    <div className="offer__block offer-block offer-block_calc-bg">
                        <h2 className="offer__title">
                            Оставьте заявку на расчет
                        </h2>
                        <span className="offer__subtitle">
                            и получите скидку 30% на любые виды десертов
                        </span>
                        <form action="#" className="form offer__form">
                            <div className="form__row">
                                <div class="form__group">
                                    <label className="form label">Вид стекла</label>
                                    <input type="text" className="input form__input" />
                                </div>
                                <div className="form__group">
                                    <label className="form label">Ширина, см</label>
                                    <input type="text" className="input form__input" />
                                </div>
                                <div className="form__group">
                                    <label className="form label">Высота, см</label>
                                    <input type="text" className="input form__input" />
                                </div>
                            </div>
                            <div className="form__row form__row-checkbox">
                                <div className="form__checkbox">
                                    <input className="checkbox" type="checkbox" id="install" />
                                    <label className="checkbox-label" htmlFor="install">

                                        Монтаж
                                    </label>

                                </div>
                                <div className="form__checkbox">
                                    <input className="checkbox" type="checkbox" id="delivery" />
                                    <label className="checkbox-label" htmlFor="delivery">

                                        Доставка
                                    </label>

                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__group">
                                    <input type="text" className="input form__input" placeholder="Ваше имя" />
                                </div>
                                <div className="form__group">
                                    <input type="tel" className="input form__input" placeholder="Ваше телефон" />
                                </div>
                                <div className="form__group">
                                    <input type="submit" className="button form__button" value="Получить скидку" />
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
