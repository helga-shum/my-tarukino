import React from 'react'
import CatalogItem from './CatalogItem'
import { Link } from 'react-router-dom';

const catalogItems = [
    'Пироги',
    'Конфеты',
    'Кексы',
    'Чизкейки',
    'Печенье',
    'Торты'
]

function Catalog() {
    return (
        <div>
            <section class="section catalog">
                <div class="container">
                    <h2 class="section-title section__title">
                        каталог десертов
                    </h2>
                    <div class="catalog-block">

                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-1.jpg" alt="" />
                            <span class="catalog-card__tag">Пироги</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-2.jpg" alt="" />
                            <span class="catalog-card__tag">Конфеты</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-3.jpg" alt="" />
                            <span class="catalog-card__tag">Кексы</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-4.jpg" alt="" />
                            <span class="catalog-card__tag">Чизкейки</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-5.jpg" alt="" />
                            <span class="catalog-card__tag">Печенье</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>
                        <div class="catalog-card catalog__card">
                            <img class="catalog-card__image" src="img/cakes/cake-6.jpg" alt="" />
                            <span class="catalog-card__tag">Торты</span>
                            <div class="catalog-card__buttons">
                                <button class="button-fitting catalog-card__button">Посмотреть</button>


                            </div>
                        </div>


                    </div>
                </div>
                <div class="catalog__link">
                    <Link to="/home" class="button button_lg catalog__link-more">Смотреть весь каталог Десертов</Link>
                    <span class="catalog__description">Более 3000 видов десертов</span>
                </div>

            </section>

        </div>
    )
}

export default Catalog
