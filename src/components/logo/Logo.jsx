import React from 'react'
import LogoSrc from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img data-test='logo-img' src={LogoSrc} alt='app logo' />
        </div>
    )
}

export default Logo
