import React from 'react'
import { Link } from 'react-router-dom';



function Catalog() {
    return (
        <div>
            <section className="section catalog">
                <div className="container">
                    <h2 className="section-title section__title">
                        каталог десертов
                    </h2>
                    <div className="catalog-block">

                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-1.jpg" alt="" />
                            <span className="catalog-card__tag">Пироги</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-2.jpg" alt="" />
                            <span className="catalog-card__tag">Конфеты</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-3.jpg" alt="" />
                            <span className="catalog-card__tag">Кексы</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-4.jpg" alt="" />
                            <span className="catalog-card__tag">Чизкейки</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-5.jpg" alt="" />
                            <span className="catalog-card__tag">Печенье</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div className="catalog-card catalog__card">
                            <img className="catalog-card__image" src="img/cakes/cake-6.jpg" alt="" />
                            <span className="catalog-card__tag">Торты</span>
                            <div className="catalog-card__buttons">
                                <button className="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>


                    </div>
                </div>
                <div class="catalog__link">
                    <Link to="/home" className="button button_lg catalog__link-more">Смотреть весь каталог Десертов</Link>
                    <span className="catalog__description">Более 3000 видов десертов</span>
                </div>

            </section>

        </div>
    )
}

export default Catalog
