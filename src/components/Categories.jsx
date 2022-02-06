import React from 'react'



const Categories = React.memo(function Categories({ names, activeCategory, onClickCategory }) {



    return (
        <div>



            <div className="categories">
                <ul>
                    <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'button button' : 'button-o button-categories'}>Все виды</li>

                    {names &&
                        names.map((name, index) =>
                            <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'button' : 'button-o button-categories'}>{name}</li>)}
                </ul>
            </div>

        </div>
    )
})

export default Categories
