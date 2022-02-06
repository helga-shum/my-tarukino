import React from 'react'

function DesertBlock({ id, name, price, image, onAddDesert }) {
    const onClickAddDesert = () => {
        const obj =
            { id, name, price, image, onAddDesert };
        onAddDesert(obj)
    }
    return (
        <div>
            <div className="item-block">
                <div className="item-block__image">
                    <img src={image} alt="img" />
                </div>
                <div className="item-block__text">
                    <h4 className="item-block__title">
                        {name}
                    </h4>
                    <div className="item-block__bottom">
                        <div className="item-block__price">
                            {price}
                        </div>
                        <button onClick={onClickAddDesert} className="button-o ">
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DesertBlock
