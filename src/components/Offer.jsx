import React from 'react'

function Offer() {
    return (
        <div>
            <section id="offer" class="offer">
                <div class="container">
                    <div class="offer__block offer-block offer-block_price-bg">
                        <h2 class="offer__title">
                            Ищите где дешевле и лучше?
                        </h2>
                        <span class="offer__subtitle">
                            Обращайтксь к нам
                        </span>
                        <form action="#" class="form offer__form">
                            <div class="form__row">
                                <div class="form__group">
                                    <input type="text" class="input form__input" placeholder="Ваше имя" />
                                </div>
                                <div class="form__group">
                                    <input type="text" class="input form__input" placeholder="Ваш телефон" />
                                </div>
                                <div class="form__group">
                                    <input type="text" class="input form__input" placeholder="Ваша цена" />
                                </div>
                            </div>

                            <div class="form__row">

                                <div class="form__group">
                                    <input type="submit" class="button form__button form__button-price" value="Получить расчет со скидкой" />
                                </div>
                                <div class="form__group">
                                    <span class="form__policy">
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
