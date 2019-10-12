import React from 'react'
import './Header.scss'
import Logo from '../logo/Logo'

const Header = () => {
    return (
        <header data-test='header-component'>
            <div className="wrap">
                <Logo />
            </div>
        </header>
    )
}

export default Header
