import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Button(props) {
    return <div></div>;
}

Button.prototype = {
    type: propTypes.oneOf(["button", "link"]),
    onclick: prototype.func,
    target: prototype.string,
    className: prototype.string,
    isDisables: prototype.bool,
    isLoading: prototype.bool,
    isSmall: prototype.bool,
    isLarge: prototype.bool,
    isBlock: prototype.bool,
    hashShadow: prototype.bool,
}