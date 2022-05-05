import React from 'react'
import { Category, Sort, PizzaBlock } from '../components'

const category = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortStyle = [
    'цене',
    'алфавиту'
]

const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Category onClickFoo={(cat_name) => console.log(cat_name)} items={category} />
                <Sort sortStyle={sortStyle} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas &&
                    pizzas.map((pizza, i) => {
                        return (
                            <PizzaBlock key={pizza.id} {...pizza} />
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Home