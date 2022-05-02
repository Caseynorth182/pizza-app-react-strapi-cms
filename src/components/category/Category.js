import React from 'react'
const category = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]
const Category = () => {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
            </ul>
        </div>
    )
}

export default Category