import React from 'react'

function CatalogItem({ names }) {
    return (
        <div>
            <div className="catalog-card catalog__card">
                <img className="catalog-card__image" src="img/cakes/cake-$.jpg" alt="" />
                {names &&
                    names.map((name) =>
                        <span className="catalog-card__tag">{name}</span>
                    )}
                <div className="catalog-card__buttons">
                    <button className="button-fitting catalog-card__button">Посмотреть</button>


                </div>
            </div>


        </div>
    )
}

export default CatalogItem
