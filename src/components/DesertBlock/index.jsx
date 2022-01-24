import React from 'react'

function DesertBlock({ id, name, price, image, onAddDesert }) {
    const onClickAddDesert = () => {
        const obj =
            { id, name, price, image, onAddDesert };
        onAddDesert(obj)
    }
    return (
        <div>
            <div class="item-block">
                <div class="item-block__image">
                    <img src={image} />
                </div>
                <div className="item-block__text">
                    <h4 class="item-block__title">
                        {name}
                    </h4>
                    <div class="item-block__bottom">
                        <div class="item-block__price">
                            {price}
                        </div>
                        <button onClick={onClickAddDesert} class="button-o ">
                            <span>Добавить</span>
                        </button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default DesertBlock
