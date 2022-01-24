import React from 'react'

function CatalogItem({ names }) {
    return (
        <div>
            <div class="catalog-card catalog__card">
                <img class="catalog-card__image" src="img/cakes/cake-$.jpg" alt="" />
                {names &&
                    names.map((name) =>
                        <span class="catalog-card__tag">{name}</span>
                    )}
                <div class="catalog-card__buttons">
                    <button class="button-fitting catalog-card__button">Посмотреть</button>


                </div>
            </div>


        </div>
    )
}

export default CatalogItem
