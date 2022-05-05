import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'; // ES6
const Button = ({ outline, children, className }) => {



    return (

        <button

            className={classNames('button', className, {
                'button--outline': outline,

            })}>
            {children}
        </button>

    )
}



Button.propTypes = {
    className: PropTypes.string
}



Button.defaultProps = {
    children: <span>Кнопка</span>
};
export default Button