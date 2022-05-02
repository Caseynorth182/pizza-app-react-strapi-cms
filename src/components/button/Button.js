import React from 'react'
import classNames from 'classnames'

const Button = ({ outline, children, className }) => {


    const alert2 = () => {
        alert(children)
    }
    return (

        <button
            onClick={() => alert2()}
            className={classNames('button', className, {
                'button--outline': outline,

            })}>
            {children}
        </button>

    )
}

export default Button