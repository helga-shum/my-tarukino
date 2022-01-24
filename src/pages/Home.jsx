import React from 'react'
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import DesertBlock from '../components/DesertBlock';
import Menu from '../components/Header/Menu';
import { fetchDeserts } from '../redux/actions/deserts'
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from './../redux/actions/filters';
import LoadingBlock from './../components/DesertBlock/LoadingBlock';
import NavbarCart from './../components/Header/NavbarCart';
import { addDesertToCart } from './../redux/actions/cart';

const categoryNames = [

    'Пироги',
    'Конфеты',
    'Кексы',
    'Чизкейки',
    'Печенье',
    'Торты'
]


function Home() {

    const { items } = useSelector(({ deserts }) => deserts)
    const { category } = useSelector(({ filters }) => filters)
    const isLoaded = useSelector(({ deserts }) => deserts.isLoaded)
    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(fetchDeserts(category))

    }, [category])

    const onSelectItem = React.useCallback(index => {
        dispatch(setCategory(index))

    }, [])

    const onAddDesertToCart = (obj) => {
        dispatch(addDesertToCart(obj))
    }







    return (
        <div>
            <div className="navbar">

                <div class="container">
                    <NavbarCart />
                </div>
            </div>
            <section class="section content">
                <div class="container">
                    <div class="content__top">
                        <Categories
                            activeCategory={category}
                            onClickCategory={onSelectItem}
                            names={categoryNames} />

                    </div>

                    <div class="content__items">
                        {isLoaded
                            ? items.map(obj => <DesertBlock onAddDesert={onAddDesertToCart} key={obj.id} {...obj} />)
                            : Array(36)
                                .fill(0)
                                .map((_, index) => <LoadingBlock key={index} />)
                        }





                    </div>
                </div>
            </section>
        </div>



    )
}

export default Home

