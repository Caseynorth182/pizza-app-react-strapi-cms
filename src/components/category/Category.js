import React, { useEffect, useState } from 'react'

const Category = ({ items, onClickFoo }) => {
    const [activeClass, setActive] = useState(null);

    useEffect(() => {
        setActive(-1)
    }, [])

    const OnSelectItem = (index) => {
        setActive(index)
        onClickFoo(activeClass)
    }

    //LINK проверка на null & undefined
    const elements = items && items.map((item, i) => {
        return (
            <li
                onClick={() => OnSelectItem(i)}
                className={activeClass === i ? 'active' : ''}
                key={`${item}_${i}`}
            >{item}
            </li>
        )
    })

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => OnSelectItem(-1)}
                    className={activeClass === -1 ? 'active' : ''}
                >Все</li>
                {elements}
            </ul>
        </div>
    )
}

export default Category