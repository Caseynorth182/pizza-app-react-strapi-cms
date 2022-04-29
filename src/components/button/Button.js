import React from 'react'

const Button = (props) => {
    console.log(props);
    const buttonClass = props.outline ? 'button button--outline' : 'button'
    return (
        <>
            <button className={buttonClass}>
                {props.children}
            </button>
        </>
    )
}

export default Button